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
          img-src="~/assets/azucar-leche-huevo.webp"
        />
        <q-carousel-slide
          :name="2"
          img-src="~/assets/ChocolateCakeForTwo_Featured.jpg"
        />
        <q-carousel-slide :name="3" img-src="~/assets/dulces_finos.jpg" />
        <q-carousel-slide :name="4" img-src="~/assets/panes_dulces.jpg" />
        <template v-slot:control>
          <q-carousel-control
            position="top"
            :offset="[16, 8]"
            class="text-primary text-subtitle1 text-center rounded-borders"
            style="background: rgba(255, 255, 255, 0.5); padding: 4px 8px"
          >
            Descubre nuestros increíbles productos y disfruta del envío gratuito
            en todos los pedidos.
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>

    <!-- Qtab -->

    <div class="q-pa-md" align="center">
      <div style="max-width: 1200px">
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
              class="bg-purple text-white text-center row q-gutter-md justify-evenly"
            >
              <div class="text-h4 col-12">Productos destacados</div>
              <!-- +++++++++++++++++++++++++ -->

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
              class="bg-orange text-white text-center row q-gutter-md justify-evenly"
            >
              <div class="text-h4 col-12">Promociones y descuentos</div>
              <!-- ================================== -->

              <q-card
                class="promocion"
                flat
                bordered
                v-for="(promotion, index) in promotions"
                :key="index"
              >
                <q-item class="q-pa-md">
                  <q-item-section
                    side
                    class="text-orange text-weight-bolder text-subtitle1"
                  >
                    {{ promotion.title }}
                  </q-item-section>

                  <q-item-section>
                    <q-badge color="red" floating transparent>
                      <q-item-label class="discount text-weight-bold">
                        {{ promotion.discount }}% de descuento
                      </q-item-label>
                    </q-badge>

                    <q-item-label caption>
                      <q-chip
                        dense
                        outline
                        size="15px"
                        class="glossy"
                        color="orange"
                        text-color="dark"
                        icon="event"
                      >
                        <q-item-label caption class="text-dark">
                          Válido hasta {{ promotion.expires }}
                        </q-item-label>
                      </q-chip>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator />

                <q-card-section horizontal>
                  <q-card-section class="text-subtitle1 text-dark">
                    {{ promotion.description }}
                  </q-card-section>

                  <q-separator vertical />

                  <q-card-section class="col-8 self-center no-padding">
                    <q-img
                      :ratio="4 / 3"
                      fit="cover"
                      :src="promotion.image"
                      :alt="promotion.title"
                    />
                  </q-card-section>
                </q-card-section>
              </q-card>
            </q-tab-panel>

            <!-- Testimonios de clientes satisfechos -->
            <q-tab-panel
              name="testimonials"
              class="bg-teal text-white text-center row q-gutter-md justify-evenly"
            >
              <div class="text-h4 col-12">
                Testimonios de clientes satisfechos
              </div>

              <q-card
                class="testimonial-card text-dark col-4"
                v-for="(testimonial, index) in testimonials"
                :key="index"
              >
                <q-item>
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="testimonial.avatar" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section side> {{ testimonial.name }} </q-item-section>
                  <div>
                    <q-badge color="transparent" floating outline>
                      <q-rating
                        v-model="ratingModel"
                        readonly
                        size="1.6em"
                        icon="thumb_up"
                    /></q-badge>
                  </div>
                </q-item>
                <q-separator inset />
                <q-card-section class="q-pt-none">
                  {{ testimonial.text }}
                </q-card-section>
              </q-card>
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
const ratingModel = ref(3);

const tab = ref("promotions");

const props = defineProps({
  promotions: Array,
});

const products = ref([
  {
    name: "Pastel de chocolate",
    description: "Delicioso pastel de chocolate con relleno de crema y frutas",
    image: "src/assets/fotos.jpg",
    price: 25,
  },
  {
    name: "Cupcakes",
    description: "Cupcakes de diferentes sabores: vainilla, chocolate y fresa",
    image: "src/assets/fotos.jpg",
    price: 5,
  },
  {
    name: "Galletas",
    description: "Galletas recién horneadas de diferentes sabores",
    image: "src/assets/fotos.jpg",
    price: 10,
  },
]);

const promotions = ref([
  {
    title: "Oferta de temporada",
    description:
      "Aprovecha nuestra oferta de temporada y obtén un 10% de descuento en todos los pasteles",
    image: "src/assets/fotos.jpg",
    discount: 10,
    expires: "31 de diciembre de 2023",
  },
  {
    title: "Paquete de postres",
    description:
      "Compra nuestro paquete de postres y obtén un 15% de descuento en tu compra",
    image: "src/assets/fotos.jpg",
    discount: 15,
    expires: "30 de noviembre de 2023",
  },
]);

const testimonials = ref([
  {
    name: "María Pérez",
    text: "Los pasteles de esta tienda son los mejores que he probado en mi vida. ¡Los recomiendo totalmente!",
    avatar: "src/assets/avatar-testimonio.png",
  },
  {
    name: "Pedro García",
    text: "Siempre compro mis pasteles aquí y nunca me han decepcionado.",
    avatar: "src/assets/alien-testimonio.webp",
  },
  {
    name: "María Pérez",
    text: "Los pasteles de esta tienda son los mejores que he probado en mi vida. ¡Los recomiendo totalmente!",
    avatar: "src/assets/avatar-testimonio.png",
  },
  {
    name: "Pedro García",
    text: "Siempre compro mis pasteles aquí y nunca me han decepcionado.",
    avatar: "src/assets/alien-testimonio.webp",
  },
  {
    name: "María Pérez",
    text: "Los pasteles de esta tienda son los mejores que he probado en mi vida. ¡Los recomiendo totalmente!",
    avatar: "src/assets/avatar-testimonio.png",
  },
  {
    name: "Pedro García",
    text: "Siempre compro mis pasteles aquí y nunca me han decepcionado.",
    avatar: "src/assets/alien-testimonio.webp",
  },
]);

function addToCart(product) {
  console.log(`Agregado al carrito: ${product.name}`);
}
</script>

<style scoped lang="scss">
.testimonial-card {
  width: 100%;
  max-width: 350px;
}

.promocion {
  width: 100%;
  max-width: 450px;
}
</style>
