<template>
    <div>
        <div
          v-if="newsLetter"
          class="p-6 fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
        >
          <div class="relative w-auto mx-4 max-w-3xl">
            <div class="rounded-lg overflow-hidden bg-white w-full shadow-2xl">
              <div
                v-if="subscribeSuccess"
                class="flex flex-col items-center justify-center py-6 px-4 text-center"
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
                <h1 class="py-4">
                  You have successfully subscribed to our newsletter.
                </h1>
                <button
                  @click="newsLetter = false"
                  class="bg-green-500 text-gray-200 px-6 py-2 rounded-lg shadow-lg"
                >
                  Close
                </button>
              </div>
              <div v-if="!subscribeSuccess">
                <div
                  v-if="subscribeError"
                  class="px-2 py-2 text-center text-red-500 bg-red-200"
                >
                  {{ subscribeError }}
                </div>
                <div class="p-4 flex flex-col items-center justify-center">
                  <div
                    class="animate-pulse w-32 h-32 bg-green-300 rounded-full mx-4 flex items-center justify-center"
                  >
                    <div
                      class="animate-pulse w-20 h-20 bg-green-200 rounded-full mx-4 flex items-center justify-center"
                    >
                      <div
                        class="animate-pulse w-20 h-20 bg-green-100 rounded-full mx-4 flex items-center justify-center"
                      >
                        <svg
                          class="w-16 h-12 text-green-500"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-8 text-center font-bold text-xl tracking-wider">
                    Sign Up For Our NewsLetter
                  </h1>
                  <div class="mt-6">
                    <form @submit="handleSuscribe">
                      <input
                        id=""
                        v-model="email"
                        class="outline-none w-full p-3 bg-gray-200 rounded-lg border shadow-lg focus:bg-gray-100"
                        type="email"
                        name=""
                        placeholder="email"
                      />
                      <button
                        type="submit"
                        class="w-full mt-6 px-8 py-3 text-gray-200 font-semibold text-lg tracking-wider bg-green-500 rounded-lg"
                      >
                        {{ subscribing ? "Subscribing..." : "Subscribe" }}
                      </button>
                    </form>
                    <button @click="newsLetter = false" class="absolute top-0 w-8 h-8 right-0 mx-2 mt-16 border-2 rounded-full px-2 py-1 font-bold text-red-500 border-red-500">X</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="newsLetter"
          class="absolute inset-0 z-40 opacity-25 bg-black"
        ></div>
    </div>
</template>

<script>
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
      email: "",
      newsLetter: true,
      subscribeError: false,
      subscribeSuccess: false,
      subscribing: false,
    };
  },
   methods: {
    async handleSuscribe(e) {
      try {
        e.preventDefault();
        this.subscribing = true;
        this.subscribeError = null;
        await this.$strapi.$subscribers.create({ email: this.email });
        // clear email input
        this.email = "";
        this.subscribing = false;
        this.subscribeSuccess = true;
      } catch (error) {
        this.subscribing = false;
        if (error) {
          this.subscribeError =
            "Error Msg: Invalid email or email is already in use.";
        }
      }
    },
  },
}
</script>