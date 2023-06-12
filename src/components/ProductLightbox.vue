<script>
export default {
  props: ['product'],
  data() {
    return {
      activeImage: 1
    }
  },
  methods: {
    slideRight() {
      if (this.activeImage < 4) {
        this.activeImage++;
      } else {
        this.activeImage = 1;
      }
    },
    slideLeft() {
      if (this.activeImage > 1) {
        this.activeImage--;
      } else {
        this.activeImage = 4;
      }
    }
  }
}
</script>

<template>
  <div class="product-preview">
    <!-- preloading images -->
    <img
      v-for="n in 4"
      :src="`/images/product-${product.id}/image-product-${n}.jpg`"
      style="display: none;"
      preload
    >

    <!-- main -->
    <div class="product-preview__main">
      <!-- buttons -->
      <button class="slide-btn left" @click="slideLeft">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1d2025" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <button class="slide-btn right" @click="slideRight">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1d2025" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
      </button>
      <!-- image -->
      <transition mode="out-in" name="product-slide">
        <img
          :src="`/images/product-${product.id}/image-product-${activeImage}.jpg`"
          :key="activeImage"
          alt="Product Image"
          class="main-image">
      </transition>
    </div>
    <!-- thumbnails -->
    <div class="product-preview__thumbnails">
      <div v-for="n in 4" class="thumbnail" @click="activeImage = n" :class="{active: activeImage == n}">
        <img :src="`/images/product-${product.id}/image-product-${n}-thumbnail.jpg`">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../main.scss';

.product-preview {
  &__main {
    position: relative;

    @include breakpoint-upto($dev-width-sm) {
      height: 300px;
    }
    
    .slide-btn {
      position: absolute;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-50%);
      transition: $ts-200;
      display: none;
      z-index: 1;

      @include breakpoint-upto($dev-width-md) {
        display: flex;
      }

      &.left {
        top: 50%;
        left: 20px;
      }

      &.right {
        top: 50%;
        right: 20px;
      }

      &:hover {
        path {
          stroke: $clr-orange;
        }
      }

      svg {
        transform: scale(0.7);
      }

      path {
        transition: $ts-200;
      }
    }
    
    .main-image {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;

      @include breakpoint-upto($dev-width-sm) {
        // width: 100vw;
        // left: -5vw;
        border-radius: 0;
      }
    }
  }

  &__thumbnails {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding-top: 30px;

    .thumbnail {
      border-radius: 10px;
      border: 2px solid transparent;
      transition: $ts-200;
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: $ts-200;
      }

      &.active {
        border-color: $clr-orange;

        img {
          opacity: 0.3;
        }
      }

      &:hover img {
        opacity: 0.3;
      }
    }

    @include breakpoint-upto($dev-width-md) {
      display: none;
    }
  }
}

// transitions
.product-slide-enter-from,
.product-slide-leave-to {
  opacity: 0;
}
.product-slide-enter-active,
.product-slide-leave-active {
  transition: all 200ms ease-in-out;
}

@include breakpoint-upto($dev-width-md) {
  .product-slide-enter-from
  .product-slide-leave-to {
    opacity: 1;
    transform: translateX(100%);
  }
}
</style>
