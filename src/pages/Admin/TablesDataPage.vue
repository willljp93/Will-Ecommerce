<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        :rows="featureds"
        :columns="columnsfeatureds"
        :filter="filter"
        row-key="id"
        no-data-label="No encontre nada para ti"
        no-results-label="El filtro no descubrió ningún resultado."
        flat
        dense
        bordered
        separator="cell"
      >
        <template v-slot:top="props">
          <div class="col-2 q-table__title text-white">
            Productos Destacados
          </div>
          <q-space />
          <q-input
            rounded
            standout="bg-teal-3 text-white"
            dark
            dense
            input-class="text-right"
            debounce="300"
            color="teal-3"
            v-model="filter"
          >
            <template v-slot:append>
              <q-icon v-if="filter === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="filter = ''"
              />
            </template>
          </q-input>
          <q-btn
            flat
            unelevated
            fab-mini
            color="white"
            icon="add"
            type="submit"
            label="Agregar"
            @click="showAddDialog = true"
            class="q-ml-md"
          />
          <q-btn
            flat
            round
            dense
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"
            class="q-ml-md"
          />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              flat
              round
              dense
              color="primary"
              icon="edit"
              @click="showEditDialog = true"
            />
            <q-btn
              flat
              round
              dense
              color="negative"
              icon="delete"
              @click="deleteFeatured(props.row.id)"
            />
          </q-td>
        </template>
      </q-table>
      <q-dialog v-model="showAddDialog" persistent>
        <q-card>
          <q-card-section>
            <q-form @submit="addFeatured(props.row)">
              <q-input v-model="newFeatured.name" label="Nombre" />
              <q-input v-model="newFeatured.description" label="Descripción" />
              <q-input
                v-model="newFeatured.price"
                label="Precio"
                type="number"
              />
              <q-select
                v-model="newFeatured.rating"
                label="Valoración"
                :options="[1, 2, 3, 4, 5]"
              />
              <q-checkbox v-model="newFeatured.discount" label="Descuento" />
              <q-input
                v-if="newFeatured.discount"
                v-model="newFeatured.discountValue"
                type="number"
                label="Valor del descuento"
              />
              <q-input v-model="newFeatured.image" label="Imagen" />
              <div class="q-mt-md q-gutter-xs">
                <q-btn type="submit" label="Agregar" color="primary" />
                <q-btn label="Cancelar" @click="showAddDialog = false" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="showEditDialog" persistent>
        <q-card>
          <q-card-section>
            <q-form @submit="editFeatured(props.row)">
              <q-input v-model="editedFeatured.name" label="Nombre" />
              <q-input
                v-model="editedFeatured.description"
                label="Descripción"
              />
              <q-input
                v-model="editedFeatured.price"
                label="Precio"
                type="number"
              />
              <q-select
                v-model="editedFeatured.rating"
                label="Valoración"
                :options="[1, 2, 3, 4, 5]"
              />
              <q-checkbox v-model="editedFeatured.discount" label="Descuento" />
              <q-input
                v-if="editedFeatured.discount"
                v-model="editedFeatured.discountValue"
                type="number"
                label="Valor del descuento"
              />
              <q-input v-model="editedFeatured.image" label="Imagen" />
              <div class="q-mt-md q-gutter-xs">
                <q-btn type="submit" label="Agregar" color="primary" />
                <q-btn label="Cancelar" @click="showEditDialog = false" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>
<script setup>
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
const featureds = ref([]);
const filter = ref("");

const showAddDialog = ref(false);
const showEditDialog = ref(false);

onMounted(async () => {
  await getFeatureds();
});
const getFeatureds = async () => {
  const { data } = await api.get("/collections/featureds/records");
  featureds.value = data.items;
};
const columnsfeatureds = [
  {
    name: "id",
    required: true,
    label: "Id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "description",
    align: "left",
    label: "Descripción",
    field: "description",
    sortable: false,
  },
  {
    name: "price",
    label: "Precio",
    field: "price",
    format: (val) => `${val}`,
    align: "center",
    sortable: true,
  },
  {
    name: "rating",
    label: "Valoración",
    field: "rating",
    sortable: true,
    align: "center",
  },
  {
    name: "discount",
    label: "Descuento",
    field: "discount",
    sortable: true,
    align: "center",
  },
  { name: "image", label: "Imagen", field: "image", align: "center" },
  { name: "actions", label: "Acciones", align: "right" },
];
const newFeatured = ref({
  name: "",
  description: "",
  price: 0,
  rating: 1,
  discountValue: "",
  image: "",
});

const editedFeatured = ref({
  name: "",
  description: "",
  price: 0,
  rating: 1,
  discountValue: "",
  image: "",
});

const addFeatured = async (featured) => {
  try {
    await api.post("collections/featureds/records", featured);
    // Agregar la nueva fila a la tabla utilizando el resultado de la llamada a la API
    // ...
    showAddDialog.value = false;
  } catch (error) {
    console.error(error);
  }
};

const editFeatured = async (row) => {
  try {
    // Actualizar el elemento en el API
    await api.patch(`/collections/featureds/records/${props.row}`, {
      fields: editedFeatured.value,
    });

    // Actualizar el elemento en la lista de featureds
    const index = featureds.value.findIndex((f) => f.id === props.row.id);
    featureds.value[index] = editedFeatured.value;

    // Cerrar el diálogo y limpiar los campos del formulario
    showEditDialog.value = false;
    editedFeatured.value = {
      name: "",
      description: "",
      price: 0,
      rating: 1,
      discount: false,
      discountValue: "",
      image: "",
    };
  } catch (error) {
    console.error(error.response.data);
    // Mostrar mensaje de error al usuario
    alert(
      "Ocurrió un error al editar el elemento. Por favor, inténtalo de nuevo más tarde."
    );
  }
};

const deleteFeatured = async (id) => {
  await api.delete(`collections/featureds/records/${id}`);
};
</script>
<style lang="scss">
.my-sticky-header-table {
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background-color: #26a69a;
  }
  thead tr th {
    position: sticky;
    z-index: 1;
  }
  thead tr:first-child th {
    top: 0;
  }
  &.q-table--loading thead tr:last-child th {
    top: 48px;
  }
}
</style>
