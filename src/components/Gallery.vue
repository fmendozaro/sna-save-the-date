<template>
  <div id="gallery">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title"
      uk-scrollspy="cls:uk-animation-slide-top-small"
    >
      <span>Our Gallery</span>
    </h1>
    <div
      class="uk-responsive-width uk-padding-large uk-overflow-hidden uk-padding-remove-top"
      uk-scrollspy="cls:uk-animation-slide-top-small"
    >
      <iframe
        src="https://www.youtube.com/embed/eay_NdtmJVM?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
        width="900"
        height="500"
        frameborder="0"
        gesture="media"
        allow="encrypted-media"
        allowfullscreen
        uk-responsive
      ></iframe>
      <div class="uk-padding-remove-top slider">
        <slick ref="slick" :options="slickOptions">
          <div
            v-for="n in 12"
            :key="n"
            class="uk-responsive-width uk-responsive-height uk-padding-small"
          >
            <img :src="`gal-${n}.jpeg`" :alt="`Gallery photo number ${n}`" />
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Gallery',
  components: { VueSlickCarousel },

  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              fade: true,
              cssEase: 'linear'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="css" scoped>
#gallery {
  padding-top: 1px;
  background-color: #c1ebf7;
}
.slider {
  padding: 15px;
}

@media screen and (max-width: 1024px) {
  .slider {
    padding: 3px;
  }
}
</style>
