<template>
  <div class="mt-16 py-4 px-4 bg-gray-900 border-b border-gray-800">
    <h1 class="text-center font-bold text-lg text-yellow-500 tracking-wide">
      Sign Up For Our NewsLetter
    </h1>
    <div class="mt-4">
      <form @submit="handleSuscribe">
        <div
          class="md:flex md:items-center md:justify-center md:space-x-4 w-full md:max-w-xl mx-auto"
        >
          <input
            id=""
            v-model="email"
            class="outline-none w-full md:w-3/5 p-3 bg-gray-200 rounded-lg border shadow-lg focus:bg-gray-100"
            type="email"
            required
            name=""
            placeholder="email"
          />
          <button
            type="submit"
            class="w-full md:w-2/5 mt-4 md:mt-0 px-8 py-3 text-yellow-500 font-semibold text-lg border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 focus:outline-none tracking-wider rounded-lg"
          >
            {{ subscribing ? "Subscribing..." : "Subscribe" }}
          </button>
        </div>

        <div
          v-if="errorTag"
          class="text-red-500 bg-red-200 rounded-lg p-2 mt-4 text-center"
        >
          {{ error }}
        </div>
        <div
          v-if="successTag"
          class="text-green-500 bg-green-200 rounded-lg p-2 mt-4 text-center"
        >
        {{ success }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsletter",
  head() {
    return {
      title: "newsletter",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Newsletter",
        },
      ],
    };
  },
  data() {
    return {
      email: "",
      error: "",
      success: "You have successfully subscribed to our newsletter.",
      errorTag: false,
      successTag: false,
      subscribing: false,
    };
  },
  methods: {
    async handleSuscribe(e) {
      e.preventDefault();
      this.subscribing = true;
      this.errorTag = false;
      this.successTag = false;
      await this.$axios
        .post("/subscribers", {
          email: this.email,
        })
        .then(() => {
          this.email = '';
          this.subscribing = false;
          this.successTag = true;
          this.errorTag = false;
        })
        .catch((error) => {
          this.subscribing = false;
          this.successTag = false;
          this.errorTag = true;

          if (error) {
            this.error = 'Email already in use or network issues.'
          }
        })
        .finally(() => {
          this.subscribing = false;
        });
    },
  },
};
</script>