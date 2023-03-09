<template>
  <q-layout view="hHh lpR fFf">
    <!-- Barra de navegación -->
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Administración de la tienda</q-toolbar-title>
        <q-space />
        <q-btn dense flat icon="settings" aria-label="Settings" />
        <q-btn dense flat icon="person" aria-label="User" />
      </q-toolbar>
    </q-header>

    <!-- Contenido de la página -->
    <q-page-container>
      <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
        <q-list>
          <q-item to="/" exact>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-item to="/productos">
            <q-item-section avatar>
              <q-icon name="store" />
            </q-item-section>
            <q-item-section> Productos </q-item-section>
          </q-item>

          <q-item to="/categorias">
            <q-item-section avatar>
              <q-icon name="folder" />
            </q-item-section>
            <q-item-section> Categorías </q-item-section>
          </q-item>

          <q-item to="/pedidos">
            <q-item-section avatar>
              <q-icon name="receipt" />
            </q-item-section>
            <q-item-section> Pedidos </q-item-section>
          </q-item>

          <q-item to="/clientes">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>
            <q-item-section> Clientes </q-item-section>
          </q-item>

          <q-item to="/configuracion">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section> Configuración </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "AdminLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
