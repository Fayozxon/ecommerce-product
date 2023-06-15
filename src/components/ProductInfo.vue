<script>
export default {
    data() {
        return {
            productAmount: 0
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        cart() {
            return this.$store.state.cart;
        }
    },
    methods: {
        decreaseProductAmount() {
            if (this.productAmount > 0) {
                this.productAmount--;
            }
        },
        addToCart() {
            if (this.productAmount > 0) {
                this.$store.commit('addToCart',{id: 1,amount: this.productAmount});
                this.productAmount = 0;
            }
        }
    }
}
</script>

<template>
  <div class="product-info">
    <h3 class="product-info__company">{{ products[0].company }}</h3>
    <h2 class="product-info__shoes">{{ products[0].shoes }}</h2>
    <p class="product-info__description">{{ products[0].description }}</p>

    <!-- discount -->
    <div v-if="products[0].discount" class="product-info__discount">
        <h3 class="price">${{ products[0].discountPrice }}.00 <span class="pill">{{ products[0].discount }}%</span></h3>
        <h4 class="old-price">${{ products[0].price }}.00</h4>
    </div>
    <!-- price -->
    <h4 v-else class="product-info__price">${{ products[0].price }}.00</h4>

    <!-- action -->
    <div class="product-info__action">
        <div class="amount">
            <button @click="decreaseProductAmount">
                <img src="../assets/icon-minus.svg">
            </button>
            <span class="number">{{ productAmount }}</span>
            <button @click="productAmount++">
                <img src="../assets/icon-plus.svg">
            </button>
        </div>
        <button class="btn" @click="addToCart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000" fill-rule="nonzero"/></svg>
            Add to cart
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.product-info {
    &__company {
        font-size: $fs-xs;
        text-transform: uppercase;
        font-weight: $fw-bold;
        letter-spacing: 2px;
        color: $clr-orange;
    }

    &__shoes {
        padding-top: 20px;
        padding-bottom: 30px;
        font-size: $fs-xl;
        font-weight: $fw-bold;
        line-height: 117%;
        letter-spacing: 0.8px;
    }

    &__description {
        font-size: $fs-md;
        color: $clr-dark-grayish-blue;
        line-height: 150%;
    }

    &__price {
        padding: 30px 0;
        font-size: $fs-lg;
        font-weight: $fw-bold;
    }

    &__discount {
        padding: 30px 0;

        .price {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: $fs-lg;
            font-weight: $fw-bold;

            .pill {
                display: inline-block;
                padding: 5px 8px;
                border-radius: 5px;
                font-size: $fs-md;
                color: $clr-orange;
                background: $clr-pale-orange;
            }
        }

        .old-price {
            padding-top: 10px;
            font-size: $fs-md;
            color: $clr-grayish-blue;
            font-weight: $fw-bold;
            text-decoration: line-through;
        }
    }

    &__action {
        display: flex;
        gap: 5%;

        @include breakpoint-upto($dev-width-sm) {
            flex-direction: column;
            gap: 20px;
        }

        .amount {
            width: 35%;
            background: $clr-light-grayish-blue;
            padding: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @include breakpoint-upto($dev-width-sm) {
                width: 100%;
            }

            .number {
                font-size: $fs-md;
                font-weight: $fw-bold;
            }

            & > button {
                background: transparent;
                border: none;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &:hover img {
                    opacity: 0.7;
                }

                img {
                    width: 15px;
                    transition: $ts-200;
                }
            }
        }

        .btn {
            width: 60%;
            
            @include breakpoint-upto($dev-width-sm) {
                width: 100%;
            }
        }
    }
}
</style>
