<script>
export default {
    data() {
        return {
            navLinks: ['collections', 'men', 'women', 'about', 'contact'],
            isNavVisible: false
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__left">
                <!-- button -->
                <button class="header__btn" @click="isNavVisible = !isNavVisible" :class="{show: isNavVisible}">
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
                <button class="header__profile--cart-btn">
                    <img src="../assets/icon-cart.svg">
                </button>
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
            background: transparent;
            border: none;
            cursor: pointer;
            transition: $ts-200;
            opacity: 0.7;

            &:hover {
                opacity: 1;
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
</style>
