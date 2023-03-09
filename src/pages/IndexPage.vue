<template>
  <div>
    <!-- Banner principal -->
    <div class="q-pa-md">
      <q-carousel
        class="bg-secondary shadow-20 shadow-transition"
        padding="padding"
        height="200px"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <!-- <q-carousel-slide name="1" class="column no-wrap flex-center">
          <q-icon name="cake" size="56px" />
          <div class="q-mt-md text-h4 text-center">
            Descubre nuestros increíbles productos y disfruta del envío gratuito
            en todos los pedidos.
          </div>
        </q-carousel-slide> -->
        <q-carousel-slide
          :name="1"
          img-src="https://via.placeholder.com/800x600"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
        <template v-slot:control>
          <q-carousel-control
            position="top"
            :offset="[16, 8]"
            class="text-primary text-subtitle1 text-center rounded-borders"
            style="background: rgba(255, 255, 255, 0.8); padding: 4px 8px"
          >
            Descubre nuestros increíbles productos y disfruta del envío gratuito
            en todos los pedidos.
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <!-- Qtab -->

    <div class="q-pa-md" align="center">
      <div style="max-width: 1000px">
        <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
          <q-tab
            class="text-purple"
            name="productosdestacados"
            label="Productos destacados"
          />
          <q-tab
            class="text-orange"
            name="promotions"
            label="Promociones y descuentos"
          />
          <q-tab
            class="text-teal"
            name="testimonials"
            label="Testimonios de clientes satisfechos"
          />
        </q-tabs>

        <div class="q-gutter-y-sm">
          <q-tab-panels
            v-model="tab"
            animated
            transition-prev="scale"
            transition-next="scale"
            class="text-white text-center"
          >
            <!-- Sección de productos destacados -->
            <q-tab-panel
              name="productosdestacados"
              class="bg-purple text-white text-center"
            >
              <div class="text-h6">Productos destacados</div>
              <div class="products">
                <div
                  class="product row warp"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <img :src="product.image" :alt="product.name" />
                  <h3>{{ product.name }}</h3>
                  <p>{{ product.description }}</p>
                  <div class="price">{{ product.price }} €</div>
                  <q-btn
                    color="primary"
                    label="Agregar al carrito"
                    @click="addToCart(product)"
                  />
                </div>
              </div>
            </q-tab-panel>

            <!-- Sección de promociones y descuentos -->
            <q-tab-panel
              name="promotions"
              class="bg-orange text-white text-center"
            >
              <div class="text-h6">Promociones y descuentos</div>
              <div class="promotions row">
                <div
                  class="promotion"
                  v-for="(promotion, index) in promotions"
                  :key="index"
                >
                  <img :src="promotion.image" :alt="promotion.title" />
                  <h3>{{ promotion.title }}</h3>
                  <p>{{ promotion.description }}</p>
                  <div class="discount">
                    {{ promotion.discount }}% de descuento
                  </div>
                  <div class="expires">
                    Válido hasta {{ promotion.expires }}
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <!-- Testimonios de clientes satisfechos -->
            <q-tab-panel
              name="testimonials"
              class="bg-teal text-white text-center"
            >
              <div class="text-h6">Testimonios de clientes satisfechos</div>
              <div class="testimonials">
                <div
                  class="testimonial"
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                >
                  <img :src="testimonial.image" :alt="testimonial.name" />
                  <p>{{ testimonial.text }}</p>
                  <cite>{{ testimonial.name }}</cite>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
const autoplay = ref(true);

const tab = ref("promotions");

const products = ref([
  {
    name: "Pastel de chocolate",
    description: "Delicioso pastel de chocolate con relleno de crema y frutas",
    image: "https://via.placeholder.com/300x200",
    price: 25,
  },
  {
    name: "Cupcakes",
    description: "Cupcakes de diferentes sabores: vainilla, chocolate y fresa",
    image: "https://via.placeholder.com/300x200",
    price: 5,
  },
  {
    name: "Galletas",
    description: "Galletas recién horneadas de diferentes sabores",
    image: "https://via.placeholder.com/300x200",
    price: 10,
  },
]);

const promotions = ref([
  {
    title: "Oferta de temporada",
    description:
      "Aprovecha nuestra oferta de temporada y obtén un 10% de descuento en todos los pasteles",
    image: "https://via.placeholder.com/300x200",
    discount: 10,
    expires: "31 de diciembre de 2021",
  },
  {
    title: "Paquete de postres",
    description:
      "Compra nuestro paquete de postres y obtén un 15% de descuento en tu compra",
    image: "https://via.placeholder.com/300x200",
    discount: 15,
    expires: "30 de noviembre de 2021",
  },
]);

const testimonials = ref([
  {
    name: "María Pérez",
    text: "Los pasteles de esta tienda son los mejores que he probado en mi vida. ¡Los recomiendo totalmente!",
    image: "https://via.placeholder.com/100x100",
  },
  {
    name: "Pedro García",
    text: "Siempre compro mis pasteles aquí y nunca me han decepcionado.",
    image: "https://via.placeholder.com/100x100",
  },
]);

function addToCart(product) {
  console.log(`Agregado al carrito: ${product.name}`);
}
</script>

<style scoped lang="scss"></style>
