<template>
  <div class="block flex justify-center items-center space-x-5">
    <div
      class="w-full bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div
        class="flex items-center justify-between text-gray-200 px-4 py-3 sm:p-0"
      >
        <div
          class="flex items-center justify-center text-xl font-semibold"
        >
          <p class="text-yellow-500">Buy Here</p>
          <n-link to="/cart">
            <div class="relative ml-4 w-8">
              <div>
                <svg class="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z"
                  />
                </svg>
              </div>
              <p class="absolute top-0 right-0 ml-6 text-sm -mt-2 text-white bg-pink-500 rounded-full px-1">
                {{ numberOfItems }}
              </p>
            </div>
          </n-link>
        </div>
        <div class="sm:hidden">
          <button
            @click="showMenu = !showMenu"
            type="button"
            class="text-yellow-500 hover:text-yellow-300 focus:outline-none"
          >
            <svg
              class="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-show="showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-show="!showMenu"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="showMenu ? 'block' : 'hidden'"
        class="space-x-4 sm:space-x-8  text-lg font-semibold tracking-wider text-gray-400 sm:flex"
        @click="showMenu = !showMenu"
      >
        <n-link
          to="/"
          class="block py-3 pl-4 mt-1 hover:text-yellow-500 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Home</n-link
        >
        <n-link
          to="/categories"
          class="block py-3 mt-1 hover:text-yellow-500 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >Categories</n-link
        >
        <n-link
          to="/products"
          class="block py-3 mt-1 hover:text-yellow-500 rounded sm:mt-0 sm:ml-3 sm:tracking-widest"
          >All Products</n-link
        >
        <!-- <button 
        @click="logout"
        class="block w-full px-4 py-3 mt-4 mb-2 sm:m-0 bg-yellow-500 text-gray-900 rounded font-semibold uppercase hover:bg-yellow-300"
        >
        Logout</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    numberOfItems() {
      return this.$store.getters["cart/numberOfItems"];
    },
  },
  methods: {
    // async logout() {
    //   await this.$strapi.logout();
    //   this.$nuxt.$router.push("/");
    // },
  },
};
</script>