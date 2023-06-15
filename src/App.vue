<script>
import Header from './components/Header.vue';
import ProductView from './views/ProductView.vue';

export default {
  data() {
    return {
      product: {
        id: 1,
        company: 'Sneaker Company',
        shoes: 'Fall Limited Edition Sneakers',
        description:
          "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        discount: 50,
        discountPrice: "$125.00",
        price: "$250.00"
      }
    }
  },
  components: {
    Header,
    ProductView
  }
}
</script>

<template>

  <Header />
  <ProductView />
  
</template>

<style lang="scss">
// fade transitions
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-in-out;
}
</style>
