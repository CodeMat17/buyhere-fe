<template>
  <div
    v-if="showAds"
    class="py-4 px-2 bg-green-500 flex justify-between items-center flex-col"
  >
    <h3
      class="text-white text-center sm:text-lg tracking-wide font-semibold"
    >
      12% off on all purchases above N95,999
    </h3>
    <h3
      class="text-white text-center sm:text-lg tracking-wide font-semibold"
    >
      Hurry Now!!!!
    </h3>
    <button
      @click="closeAds"
      class="mt-2 px-4 py-1 text-yellow-500 font-semibold tracking-wider border-2 border-yellow-500 rounded-lg focus:outline-none hover:bg-yellow-500 hover:text-gray-200"
    >
      Close
    </button>
  </div>
</template>
<script>
export default {
  name: "Ads",
  data() {
    return {
      showAds: true,
    };
  },
  methods: {
    closeAds() {
      this.showAds = false;
    },
  },
};
</script>
<style scpoed></style>