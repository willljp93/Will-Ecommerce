<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        v-model:selected="selected"
        title="Productos Destacados"
        :rows="featureds"
        :columns="columnsfeatureds"
        row-key="id"
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
          <q-btn
            flat
            unelevated
            fab-mini
            color="white"
            icon="add"
            type="submit"
            label="Agregar"
            @click="addFeatured"
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
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width v-for="col in props.cols" :key="col.name">
              <q-td> {{ props.row[col.name] }} </q-td>
            </q-td>
            <q-td auto-width>
              <q-btn
                flat
                round
                dense
                color="primary"
                icon="edit"
                @click="editFeatured(props)"
              />
              <q-btn
                flat
                round
                dense
                color="negative"
                icon="delete"
                @click="deleteFeatured(props)"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <!-- -------------------- -->
    </div>
    <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
  </q-page>
</template>
<script setup>
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
const featureds = ref([]);
const selected = ref([]);

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
  { name: "image", label: "Imagen", field: "image" },
];
const addFeatured = (props) => {
  // Agregar lógica para agregar una nueva fila
  console.log(`Agregado: ${props.id}`);
};
const editFeatured = (props) => {
  // Agregar lógica para editar una fila
  console.log(`Editado: ${props.row}`);
};
const deleteFeatured = (props) => {
  // Agregar lógica para eliminar una fila
  console.log(`Eliminado: ${props.row}`);
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
