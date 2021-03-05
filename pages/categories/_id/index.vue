<template>
  <div class="bg-gray-100">
    <div>
      <Ads />
      <Navbar class="sticky top-0 z-50" />
      <Hero />
      <h1
        class="mt-4 text-center fontSubtitle text-gray-900 font-semibold tracking-widest text-2xl sm:text-3xl"
      >
        Products
      </h1>
      <div
        v-if="$apollo.queries.category.loading"
        class="text-center text-gray-900 font-semibold tracking-widest text-xl mt-4 py-16"
      >
        <div class="bg-gray-900 w-12 h-12 mx-auto rounded-lg">
          <svg class="text-yellow-500 animate-spin" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"
            />
          </svg>
        </div>
        <p class="mt-4">Please wait</p>
      </div>
      <div
        v-else-if="error"
        class="px-4 text-center text-gray-900 font-semibold tracking-widest text-xl mt-4 py-20"
      >
        App is undergoing a minor maintenance. Please check back in a few
        minutes.
      </div>
      <div
        v-else
        class="sm:grid sm:grid-cols-2 md:grid-cols-3 w-full sm:max-w-6xl mx-auto"
      >
        <div
          v-for="product in category.products"
          :key="product.id"
          class="my-6 px-4"
        >
          <n-link :to="`/products/${product.id}`">
            <div
              class="w-full my-4 mx-auto max-w-xs border bg-white rounded-lg overflow-hidden shadow-xl transition transform hover:-translate-y-2"
            >
              <div v-if="product.image" class="relative mx-auto">
                <!-- <img :src="category.img.url" class="my-4 w-48 h-48 mx-auto" /> -->
                <img
                  :src="product.image"
                  class="h-48 my- py-2 mx-auto object-center object-cover"
                />
                <div class="absolute bottom-0 px-4 flex items-center justify-center">
                  <img src="~/assets/svg/naira.svg" class="h-4 w-4" />
                  <p class="tracking-wide text-lg font-semibold">
                    {{ product.price | formatPrice }}
                  </p>
                </div>
                <p
                  v-if="product.new"
                  class="absolute top-0 left-0 px-4 py-2 font-semibold text-green-500 bg-green-200 rounded-br-lg"
                >
                  New
                </p>
                <p
                  class="absolute top-0 right-0 px-4 py-2 font-semibold text-yellow-500 bg-yellow-200 rounded-bl-lg"
                >
                  {{ product.stock ? "In stock" : "Not in stock" }}
                </p>
              </div>
              <div
                class="text-center px-2 py-4 bg-gradient-to-r from-gray-900 to-pink-500 text-yellow-400"
              >
                <p class="font-semibold tracking-widest text-lg">
                  {{ product.name }}
                </p>
                <p class="text-gray-500">{{ product.description }}</p>
              </div>
            </div>
          </n-link>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import categoryQuery from "~/apollo/queries/category/category";
export default {
  name: "products",
  props: ["product"],
  head() {
    return {
      title: "products",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Products",
        },
      ],
    };
  },
  data() {
    return {
      category: Object,
      error: null,
    };
  },
  apollo: {
    category: {
      prefetch: true,
      query: categoryQuery,
      variables() {
        return { id: this.$route.params.id };
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  methods: {
    ...mapActions(["addItemToCart"]),
  },
  filters: {
    formatPrice(price) {
      return `${price}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
  computed: {
    ...mapGetters(["featuredProducts"]),
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
