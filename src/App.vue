<template>
  <div class="">
    <Navbar />
    <Home />
    <Story />
    <Gallery />
    <Support />
    <Rsvp />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import Story from './components/Story.vue'
import Rsvp from './components/RSVP.vue'
import Support from './components/Support.vue'

// export lol {
//   name: 'app',
//   components: {
//     Navbar,
//     Home,
//     Gallery,
//     Story,
//     Rsvp,
//     Support
//   },
//   head: {
//     title: {
//       inner: 'Wedding',
//       separator: '-',
//       complement: 'Sarah & Aaron'
//     },
//     meta: [
//       { name: 'application-name', content: 'weddinginvitation' },
//       {
//         name: 'description',
//         content: 'Sarah & Aaron are getting married! Celebrate the day with us!',
//         id: 'desc'
//       }
//     ],
//     link: [{ rel: 'canonical', href: 'http://alvarezwedding.live', id: 'canonical' }]
//   }
// }
</script>

<!-- <style lang="less">
@import '/node_modules/uikit/src/less/uikit.less';
</style> -->
<style lang="scss">
$colorprimary: #dd183f;

@import url('https://fonts.googleapis.com/css?family=Niconne');

body h1,
.uk-logo {
  font-family: 'Niconne', cursive !important;
  font-size: 35px !important;
}
.title {
  color: #ffffff !important;
  font-size: 30px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.title:hover,
.title:focus {
  color: #000000 !important;
}
.uk-heading-line {
  background: #ef5974 !important;
}

@media screen and (max-width: 1024px) {
  body h1,
  .uk-logo {
    font-family: 'Niconne', cursive !important;
    font-size: 35px !important;
  }
  p {
    font-size: 14px !important;
  }
  h1 {
    font-size: 25px !important;
  }
  .title {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
