<script>
import ProductInfo from '../components/ProductInfo.vue';
import ProductLightbox from '../components/ProductLightbox.vue';

export default {
  props: ['product'],
  components: {
    ProductInfo,
    ProductLightbox
  }
}
</script>

<template>
    <section class="product-section">
        <div class="container">
            <ProductLightbox />
            <ProductInfo />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.product-section {
    padding-top: 90px;
    padding-bottom: 150px;

    @include breakpoint-upto($dev-width-md) {
        padding-top: 20px;
    }

    @include breakpoint-upto($dev-width-sm) {
        padding-top: 0;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > div {
            width: 45%;
        }

        @include breakpoint-upto($dev-width-md) {
            flex-direction: column;
            gap: 40px;

            & > div {
                width: 80%;
            }
        }

        @include breakpoint-upto($dev-width-sm) {
            padding: 0;

            & > div {
                width: 100%;
            }

            & > div:last-child {
                padding: 0 2rem;
            }
        }
    }
}
</style>
