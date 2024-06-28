<template>
  <div id="support" class="faqs">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title uk-scrollspy-inview"
      uk-scrollspy="cls:uk-animation-slide-top-small"
      style=""
    >
      <span data-v-fc62b15b="">Help us fund our dreamhouse (Registry)</span>
    </h1>
    <img src="/house.png" width="50%" alt="" />
    <p class="">
      Gifts are welcome but not expected. We aren't planning a honeymoon, and we don't need any
      material items. If you would like to give us a gift, please consider contributing to our
      DreamHouse Fund. We love living in Moss Beach, and would like to make our home the comfiest
      and loveliest we can for our family. We would love to add on bedrooms, fix the roof, and
      create a backyard oasis! Thank you so much!
    </p>
    <h3>
      We are using Zola to process secure transactions, check the options available
      <a href="https://www.zola.com/registry/sarahandaaronoctober11">here</a>
    </h3>
  </div>
</template>
<script>
export default {
  name: 'Support'
}
</script>

<style lang="css" scoped>
#support {
  background-color: #9d6aab;
}
.wrapper {
  padding-bottom: 5px;
}
.copyright {
  font-weight: bold;
}

@media screen and (max-width: 1024px) {
  li {
    font-size: 14px;
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
