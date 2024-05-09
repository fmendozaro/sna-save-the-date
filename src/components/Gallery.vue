<script>
import { ref, defineComponent } from 'vue'

const testFolder = './media/'
const fs = require('fs')

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file)
  })
})
//echo alvarezwedding.live > CNAME

// export default defineComponent({
//   components: {
//     VueEasyLightbox
//   },
//   setup() {
//     const visibleRef = ref(false)
//     const indexRef = ref(0) // default 0
//     const imgsRef = ref([])
//     // Img Url , string or Array of string
//     // ImgObj { src: '', title: '', alt: '' }
//     // 'src' is required
//     // allow mixing

//     const onShow = () => {
//       visibleRef.value = true
//     }
//     const showSingle = () => {
//       imgsRef.value = 'http://via.placeholder.com/350x150'
//       // or
//       // imgsRef.value  = {
//       //   title: 'this is a placeholder',
//       //   src: 'http://via.placeholder.com/350x150'
//       // }
//       onShow()
//     }
//     const showMultiple = () => {
//       imgsRef.value = ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150']
//       // or
//       // imgsRef.value = [
//       //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
//       //   'http://via.placeholder.com/350x150'
//       // ]
//       indexRef.value = 0 // index of imgList
//       onShow()
//     }
//     const onHide = () => (visibleRef.value = false)

//     return {
//       visibleRef,
//       indexRef,
//       imgsRef,
//       showSingle,
//       showMultiple,
//       onHide
//     }
//   }
// })
</script>

<template>
  <div>
    <button @click="showSingle">Show single picture.</button>
    <button @click="showMultiple">Show a group of pictures.</button>

    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
