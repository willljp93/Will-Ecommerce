<template>
  <div>
    <h4 class="text-center">Flanes</h4>
    <ListCardProductComponents :items="products" />
  </div>
</template>

<script>
import ListCardProductComponents from "src/components/ListCardProductComponents.vue";

export default {
  name: "FlanesShopPage",
  components: {
    ListCardProductComponents,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Flan 1",
          description: "Descripción del Flan 1",
          image: "src/assets/flan.jpg",
          price: 9.99,
          available: true,
          rating: 4,
        },
        {
          id: 2,
          title: "Flan 2",
          description: "Descripción del Flan 2",
          image: "src/assets/flan.jpg",
          price: 12.99,
          available: false,
          rating: 2,
          discount: 20,
        },
        {
          id: 3,
          title: "Flan 3",
          description: "Descripción del Flan 3",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 4,
          title: "Flan 4",
          description: "Descripción del Flan 4",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 5,
          title: "Flan 5",
          description: "Descripción del Flan 5",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 6,
          title: "Flan 6",
          description: "Descripción del Flan 6",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 7,
          title: "Flan 7",
          description: "Descripción del Flan 7",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 8,
          title: "Flan 8",
          description: "Descripción del Flan 8",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 9,
          title: "Flan 9",
          description: "Descripción del Flan 9",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 10,
          title: "Flan 10",
          description: "Descripción del Flan 10",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 11,
          title: "Flan 11",
          description: "Descripción del Flan 11",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
        {
          id: 12,
          title: "Flan 12",
          description: "Descripción del Flan 12",
          image: "src/assets/flan.jpg",
          price: 24.99,
          available: true,
          rating: 5,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
