<template>
  <div>
    <Navbar class="sticky top-0 z-50" />
    <div class="w-full max-w-5xl px-4 py-16 mx-auto justify-center">
      <div
        class="w-full max-w-md mx-auto border rounded-lg overflow-hidden shadow-xl"
      >
        <div class="relative">
          <img
            :src="currentProduct.image"
            class="h-64 object-cover object-center mx-auto"
          />
          <div
            class="flex items-center justify-center px-4 pb-2 absolute bottom-0 text-xl sm:text-2xl"
          >
            <img src="~/assets/svg/naira.svg" class="h-4 w-4" />

            <h1 class="font-bold">
              {{ currentProduct.price | formatPrice }}
            </h1>
          </div>
          <h3
            v-if="currentProduct.new"
            class="px-4 py-1 absolute top-0 font-bold text-xl bg-green-200 text-green-500 rounded-br-lg"
          >
            New
          </h3>
          <h3
            v-if="currentProduct.new"
            class="px-4 py-1 absolute top-0 right-0 font-bold text-xl bg-yellow-200 text-yellow-500 rounded-bl-lg"
          >
            {{ currentProduct ? "In stock" : "Not in stock" }}
          </h3>
        </div>
        <div class="bg-gray-900">
          <div class="p-4">
            <h1 class="text-yellow-500 font-bold text-xl sm:text-2xl">
              {{ currentProduct.name }}
            </h1>
            <div class="text-gray-400 mt-2">
              <h3>Description:</h3>
              <p>{{ currentProduct.description }}</p>
            </div>
          </div>
          <div class="flex items-center justify-between text-center">
            <button
              @click="$router.back()"
              class="mx-auto text-red-500 p-2 font-semibold tracking-widest"
            >
              Close
            </button>
            <!-- goBack(); -->
            <button
              @click="
                addToCart(currentProduct);
              
                showModal = true;
              "
              class="w-3/4 bg-yellow-500 text-gray-900 p-4 rounded-tl-lg font-semibold tracking-widest hover:bg-yellow-400"
            >
              <div class="flex items-center justify-center space-x-2">
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11,9H13V6H16V4H13V1H11V4H8V6H11M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18M7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2H1V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75Z"
                  />
                </svg>
                <h3>Add To Cart</h3>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative w-auto mx-4 max-w-3xl">
        <div
          class="py-4 px-4 rounded-lg overflow-hidden bg-white w-full shadow-2xl flex flex-col items-center justify-center"
        >
          <div
            class="animate-pulse w-32 h-32 bg-green-300 rounded-full mx-4 flex items-center justify-center"
          >
            <div
              class="animate-pulse w-20 h-20 bg-green-200 rounded-full mx-4 flex items-center justify-center"
            >
              <div
                class="animate-pulse w-12 h-12 bg-green-100 rounded-full mx-4 flex items-center justify-center"
              >
                <svg class="w-8 h-8 text-green-900" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 class="mt-2 text-center font-bold text-xl tracking-wider">Cart Updated!</h1>
          <h3 class="text-center">{{ currentProduct.name }} has been added to your cart.</h3>
          <div class="mt-6 flex items-center justify-between space-x-4">
            <button @click="goBack" class="border px-4 py-2 rounded-lg border-green-500 text-green-500">
              Continue Shopping
            </button>
            <n-link to="/cart"  class="px-4 py-2 rounded-lg bg-green-500 text-gray-200">
              Go to Cart
            </n-link>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>
    
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  // name: "Products",
  data() {
    return {
      currentProduct: {},
      showModal: false,
    };
  },
  async asyncData({ $strapi, route }) {
    const id = route.params.products;
    const currentProduct = await $strapi.$products.findOne(id);
    return { currentProduct };
  },
  filters: {
    formatPrice(price) {
      return `${price}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
  methods: {
    ...mapMutations({
      addToCart: "cart/add",
      // removeFromCart: 'cart/remove',
    }),
    goBack() {
      this.$router.back();
    },
  },
};
</script>