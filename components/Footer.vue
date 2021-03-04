<template>
  <div class="w-full px-4 py-6 bg-gray-900">
    <p class="font-bold text-2xl text-yellow-500 uppercase">Buy Here</p>
    <div class="sm:flex items-end justify-between">
    <div class="text-gray-500">
      <NuxtLink class="hover:text-yellow-300" to="/"><p>Home</p></NuxtLink>
      <NuxtLink class="hover:text-yellow-300" to="/categories"><p>Categories</p></NuxtLink>
      <NuxtLink class="hover:text-yellow-300" to="/products"><p>All Products</p></NuxtLink>
    </div>
    <div class="mt-6 sm:mt-0 text-gray-500 tracking-wider text-center sm:text-right">
     <p>Email: <a href="mailto:matgold17@gmail.com" class="text-blue-500">matgold17@gmail.com</a> </p>
      <p>
        &copy; {{ new Date().getFullYear() }} - BUY HERE. All rights reserved.
      </p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>