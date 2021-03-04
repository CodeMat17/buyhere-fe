<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="text-center tracking-wider py-2 px-4 font-semibold text-xl text-red-500 bg-red-200"
    >
      Your internet is off or very poor. Try to reconnect.
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: "Nunito", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.fontSubtitle {
  font-family: "Pacifico";
}
</style>
