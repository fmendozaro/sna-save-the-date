<template>
  <div id="support" class="faqs">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title uk-scrollspy-inview"
      uk-scrollspy="cls:uk-animation-slide-top-small"
      style=""
    >
      <span data-v-fc62b15b="">DreamHouse Fund (Registry)</span>
    </h1>

    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
      <div class="uk-card-media-left uk-cover-container">
        <img src="/house.png" alt="" uk-cover />
        <canvas width="800" height="400"></canvas>
      </div>
      <div>
        <div class="uk-card-body">
          <h3 class="title">Help us fund our dream house</h3>
          <p>
            Gifts are welcome but not expected. We aren't planning a honeymoon, and we don't need
            any material items. If you would like to give us a gift, please consider contributing to
            our DreamHouse Fund. We love living in Moss Beach, and would like to make our home the
            comfiest and loveliest we can for our family. We would love to add on bedrooms, fix the
            roof, and create a backyard oasis! Thank you so much!. We are using Zola to process
            secure transactions, check the options available
            <a href="https://www.zola.com/registry/sarahandaaronoctober11" target="_blank">here</a>
          </p>
        </div>
      </div>
    </div>
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
