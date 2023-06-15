<script>
export default {
    data() {
        return {
            navLinks: ['collections', 'men', 'women', 'about', 'contact'],
            isNavVisible: false,
            isCartVisible: false
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        cart() {
            return this.$store.state.cart;
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__left">
                <!-- button -->
                <button
                  class="header__btn"
                  @click="isNavVisible = !isNavVisible"
                  :class="{show: isNavVisible}">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <!-- logo -->
                <a href="/">
                    <img src="../assets/logo.svg" alt="Sneakers Logo" class="header__brand">
                </a>
                <!-- nav -->
                <nav class="header__nav" :class="{show: isNavVisible}">
                    <a
                        v-for="navLink in navLinks"
                        href="#"
                        class="nav-link"
                    >
                        {{ navLink }}
                    </a>
                </nav>
                
                <transition name="fade">
                    <div v-if="isNavVisible" class="overlay"></div>
                </transition>
            </div>
            <!-- profile -->
            <div class="header__profile">
                <button class="header__profile--cart-btn" @click="isCartVisible = !isCartVisible">
                    <img src="../assets/icon-cart.svg">
                    <span v-if="cart.length" class="notification">{{ cart.length }}</span>
                </button>
                <!-- cart -->
                <transition name="fade-top">
                    <div v-if="isCartVisible" class="header__profile--cart">
                        <h3 class="title">Cart</h3>
                        <div v-if="cart.length" class="products">
                            <transition-group tag="ul" name="list">
                                <li v-for="product,index in cart" :key="product.id" class="product">
                                    <img :src="`/images/product-${product.id}/image-product-1-thumbnail.jpg`" alt="Product thumbnail">
                                    <p>
                                        {{ products[0].shoes }} ${{ products[0].discountPrice }}.00 x {{ product.amount }} <b>${{ products[0].discountPrice*product.amount }}.00</b>
                                    </p>
                                    <button>
                                        <img src="../assets/icon-delete.svg">
                                    </button>
                                </li>
                                <button class="btn" key="1">Checkout</button>
                            </transition-group>
                        </div>
                        <div v-else class="msg">
                            <p>
                                Your cart is empty
                            </p>
                        </div>
                    </div>
                </transition>
                <!-- profile pic -->
                <button class="header__profile--user">
                    <img src="../assets/image-avatar.png" alt="Avatar Image">
                </button>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
@import '../main.scss';
.overlay {
    z-index: 1;
}
.header {
    position: sticky;
    top: 0;
    background: $clr-white;
    z-index: 10;

    &__left {
        display: flex;
        align-items: center;
        gap: 55px;

        @include breakpoint-upto($dev-width-md) {
            gap: 15px;
        }
    }

    &__btn {
        position: relative;
        background: transparent;
        border: none;
        display: none;
        cursor: pointer;
        flex-direction: column;
        gap: 3px;
        align-items: center;

        &.show {
            span {
                border-radius: 5px;

                &:nth-child(1) {
                    transform: rotate(45deg) translateY(8.5px);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    transform: rotate(-45deg) translateY(-8.5px);
                }
            }
        }

        span {
            display: inline-block;
            width: 16px;
            height: 3px;
            background: $clr-very-dark-blue;
            transition: $ts-200;
        }

        @include breakpoint-upto($dev-width-md) {
            display: flex;
            z-index: 11;
        }
    }

    &__brand {
        width: 140px;
    }

    &__nav {
        display: flex;
        gap: 30px;
        transition: $ts-200;

        .nav-link {
            position: relative;
            text-transform: capitalize;
            text-decoration: none;
            color: $clr-dark-grayish-blue;
            transition: $ts-200;
            font-size: $fs-sm;

            &::before {
                content: '';
                position: absolute;
                top: 73px;
                left: 0;
                width: 100%;
                height: 4px;
                background: $clr-orange;
                opacity: 0;
                pointer-events: none;
                transition: $ts-200;
            }

            &:hover {
                color: $clr-very-dark-blue;

                &::before {
                    opacity: 1;
                }
            }
        }

        @include breakpoint-upto($dev-width-md) {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 70%;
            background: $clr-white;
            flex-direction: column;
            padding-left: 30px;
            padding-top: 130px;
            transform: translateX(-100%);
            z-index: 10;

            &.show {
                transform: translateX(0);
            }

            .nav-link {
                font-weight: $fw-bold;
                color: $clr-very-dark-blue;
                font-size: 18px;

                &::before {
                    display: none;
                }
            }
        }
    }

    &__profile {
        display: flex;
        gap: 45px;
        align-items: center;

        @include breakpoint-upto($dev-width-md) {
            gap: 25px;
        }

        &--cart-btn {
            position: relative;
            background: transparent;
            border: none;
            cursor: pointer;
            transition: $ts-200;
            
            svg {
                opacity: 0.7;
            }

            &:hover {
                svg {
                    opacity: 1;
                }
            }

            .notification {
                position: absolute;
                top: -10px;
                right: -10px;
                width: 18px;
                height: 18px;
                background: $clr-orange;
                color: $clr-white;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
            }
        }

        &--cart {
            position: absolute;
            top: 100px;
            right: 15px;
            width: 360px;
            min-height: 240px;
            background: $clr-white;
            border-radius: 10px;
            box-shadow: 0 5px 15px -5px rgba(0,0,0,0.1),
                        0 30px 30px -10px rgba(0,0,0,0.05);
            
            @include breakpoint-upto($dev-width-sm) {
                top: 120px;
                left: 20px;
                right: 20px;
                width: auto;
            }

            .title {
                font-size: $fs-md;
                font-weight: $fw-bold;
                padding: 20px 25px;
                border-bottom: 1px solid rgba(182, 188, 200, 0.4);
            }

            .btn {
                width: 100%;
                box-shadow: none;
                margin-top: 25px;
            }

            .products {
                position: relative;
                padding: 25px;

                .product {
                    list-style: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 0;

                    img {
                        height: 40px;
                        border-radius: 5px;
                    }

                    p {
                        padding: 0 10px;
                        font-size: $fs-md;
                        color: $clr-dark-grayish-blue;
                        line-height: 1.5;

                        b {
                            color: $clr-very-dark-blue;
                            font-weight: $fw-bold;
                            padding-left: 5px;
                        }
                    }

                    button {
                        background: transparent;
                        border: none;
                        cursor: pointer;

                        img {
                            width: 20px;
                            object-fit: contain;
                        }
                    }
                }
            }

            .msg {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 150px;
                color: $clr-dark-grayish-blue;
                font-weight: $fw-bold;
            }
        }

        &--user {
            background: transparent;
            border: 2px solid transparent;
            transition: $ts-200;
            cursor: pointer;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            overflow: hidden;

            @include breakpoint-upto($dev-width-md) {
                width: 40px;
                height: 40px;
            }

            &:hover {
                border-color: $clr-orange;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
.container {
    position: relative;
    max-width: 1174px;
    padding: 40px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(182, 188, 200, 0.4);

    @include breakpoint-upto($dev-width-md) {
        padding: 30px 32px;
    }
}

// fade top transition
.fade-top-enter-from,
.fade-top-leave-to {
    transform: translateY(100px);
    opacity: 0;
}

.fade-top-enter-active,
.fade-top-leave-active,
.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 200ms ease-in-out;
}

// list transitions
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: scale(0.6);
}
</style>
