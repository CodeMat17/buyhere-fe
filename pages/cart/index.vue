<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <GrandTotal class="sticky top-0 z-50" />
    <div
      v-if="price < 1"
      class="w-full h-64 my-20 flex items-center justify-center font-bold text-xl sm:text-2xl tracking-wider"
    >
      Your cart is empty
    </div>
    <div v-else class="px-4 w-full max-w-6xl mx-auto">
      <div
        class="py-8 sm:py-12 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-6"
      >
        <div
          v-for="product in selectedProducts"
          :key="product.id"
          class="space-y-4 border rounded-lg p-2 mb-6 mt-4 shadow-lg"
        >
          <div class="flex justify-start items-center space-x-2">
            <img
              v-if="product.image"
              :src="product.image"
              class="w-20 h-24 p-2 border rounded-lg object-cover object-center shadow-lg"
            />
            <div class="text-left w-full space-y-2">
              <h1 class="font-semibold truncate">
                {{ product.name }}
              </h1>
              <div class="flex items-center justify-between">
                <h3>Unit Price:</h3>
                <div class="flex items-center">
                  <img src="~/assets/svg/naira.svg" class="h-4 w-4" />
                  <h3>{{ product.price | formatPrice }}</h3>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <h3>Qty:</h3>
                <div class="flex items-center justify-center space-x-4">
                  <button
                    @click="removeFromCart(product)"
                    class="border px-2 font-bold rounded-md"
                  >
                    -
                  </button>
                  <p v-if="product.quantity" class="border px-2 rounded-md">
                    {{ product.quantity }}
                  </p>
                  <button
                    @click="addToCart(product)"
                    class="border px-2 font-bold rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      removeFromCart: "cart/remove",
    }),
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    selectedProducts() {
      return this.$store.getters["cart/items"];
    },
    price() {
      return this.$store.getters["cart/price"];
    },
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },
  filters: {
    formatPrice(price) {
      return `${price}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
};
</script>