<template>
  <q-card
    class="my-card"
    @mouseover="hoveredCard = item.id"
    @mouseleave="hoveredCard = null"
    :class="{ 'shadow-2': hoveredCard === item.id }"
  >
    <q-img
      ratio="1"
      fit="cover"
      class="q-img"
      :src="item.image"
      :alt="item.title"
    />

    <q-badge
      class="q-badge"
      v-if="item.discount"
      color="info"
      floating
      transparent
    >
      {{ item.discount }}%
    </q-badge>

    <q-badge
      class="q-badge"
      v-else
      color="negative"
      floating
      transparent
      label="Agotado"
    />

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="shopping_bag"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center">
        <q-item-label header="" class="col text-h6 ellipsis">{{
          item.title
        }}</q-item-label>
        <div class="col-auto text-grey text-caption row no-wrap items-center">
          Comprar
        </div>
      </div>

      <q-rating
        v-model="stars"
        icon="star_border"
        icon-selected="star"
        :max="5"
        size="1.5em"
        v-if="item.rating"
        :value="item.rating"
        :readonly="false"
      />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">$ {{ item.price }}</div>
      <div class="text-caption text-grey">
        {{ item.description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical align="center">
      <q-btn
        flat
        icon="shopping_cart"
        color="primary"
        label="Agregar al carrito"
        @click="addToCart(item)"
      />
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped>
.my-card {
  max-width: 300px;
}

.q-img {
  height: 200px;
  object-fit: cover;
}
</style>

<!-- Exportamos el componente directamente desde aquí -->
<script>
export default {
  name: "ProductCard",
  props,
};
</script>
