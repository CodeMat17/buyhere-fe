<template>
  <div
    class="w-full h-16 px-4 bg-yellow-500 flex justify-between items-center font-bold tracking-wider"
  >
    <h1 class="font-semibold text-xl hidden sm:flex">Your Shopping Cart</h1>
    <div class="flex items-center justify-between w-full sm:max-w-sm">
        <div class="flex items-center justify-center">
          <p class="hidden sm:flex">Grand Total:</p>
        <div
          class=" flex items-center bg-gray-100 px-4 py-2 rounded-lg text-lg text-gray-900 ml-1"
        >
          <img src="~/assets/svg/naira.svg" class="h-4" />
          <p>{{ price | formatPrice }}</p>
        </div>
        </div>        
      <button @click="makePayment" class="font-semibold tracking-wide bg-gray-900 text-gray-400 px-4 py-2 rounded-lg">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    price() {
      return this.$store.getters["cart/price"];
    },
  },
  filters: {
    formatPrice(price) {
      return `${price}`.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
  },
  methods: {
    makePayment() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.$store.getters["cart/price"],
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
         customer: {
          email: 'matthew@gmail.com',
          phonenumber: '08102909304',
          name: 'Chukwu Matthew'
        },
        callback: function(data) {
          // specified callback function
          console.log(data)
        },
         customizations: {
          title: 'BUY HERE',
          description: 'Payment for Products in cart',
          logo: 'https://res.cloudinary.com/mctony17/image/upload/v1614839366/furniture/icon.png'
        },
      })
    }
  }
};
</script>