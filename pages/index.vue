<template>
  <div class="bg-gray-900 px-4 w-full h-screen text-center flex items-center justify-center flex-col">
   <p class="text-gray-400 text-2xl">Welcome to</p>
   <h1 class="mt-6 fontTitle font-black text-5xl text-yellow-500 tracking-wide uppercase">Buy Here</h1>
   <p class="fontSubtitle text-yellow-700 text-xl tracking-widest">cheap but quality products</p>
   <n-link to="/categories" class="mt-16 bg-yellow-500 px-8 py-2 rounded-lg text-gray-900 font-semibold tracking-wider text-xl sm:text-2xl">Start Shopping</n-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Buy-Here Home",
        },
      ],
    };
  },
  data() {
    return {
     
    };
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
