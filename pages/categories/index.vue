<template>
  <div class="bg-gray-100">
    <div>
      <Navbar class="sticky top-0 z-50" />
      <Hero />
      <h1
        class="mt-6 text-center fontSubtitle text-gray-900 font-semibold tracking-widest text-2xl sm:text-3xl"
      >
        Categories
      </h1>
     
      <div
         v-if="$apollo.queries.categories.loading"
        class="text-center text-gray-900 font-semibold tracking-widest text-xl mt-4 py-20"
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
        App is undergoing a minor maintenance. Please check back in a few minutes.
      </div>
    
      <div
          v-else
        class="sm:grid sm:grid-cols-2 w-full sm:max-w-5xl sm:gap-4 mx-auto items-center"
      >
     
        <div
          v-for="(category,i) in categories"
          :key="i"
          class="my-6 px-4"
        >
          <n-link :to="{ name: 'categories-id', params: { id: category.id } }">
            <div
              class="w-full my-4 mx-auto max-w-sm border bg-white rounded-lg overflow-hidden shadow-xl transition transform hover:-translate-y-2"
            >
              <div v-if="category.image" class="mx-auto">
                <img
                  :src="category.image"
                  class="h-48 my-2 p-2 mx-auto object-center object-cover"
                />
              </div>
              <p
                class="text-center px-2 py-4 bg-gradient-to-r from-gray-900 to-pink-500 text-yellow-400 font-semibold tracking-widest text-lg"
              >
                {{ category.name }}
              </p>
            </div>
          </n-link>
        </div>
        
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import categoriesQuery from "~/apollo/queries/category/categories";
export default {
  name: "categories",
  head() {
    return {
      title: "Categories",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Product Categories",
        },
      ],
    };
  },
  data() {
    return {
      categories: [],
      error: null,
      query: "",
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
    },
  },
  // async asyncData({ $strapi, store, error }) {
  //   try {
  //     const data = await $strapi.$categories.find();
  //     return { data };
  //     //store.commit('setFeaturedProducts', response)
  //   } catch (e) {
  //     error(e);
  //   }
  // },
  // data() {
  //   return {
  //     featuredProds: [],
  //   };
  // },
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
