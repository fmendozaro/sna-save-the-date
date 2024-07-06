<template>
  <div id="support">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title uk-scrollspy-inview"
      uk-scrollspy="cls:uk-animation-slide-top-small"
      style=""
    >
      <span data-v-fc62b15b="">DreamHouse Fund (Registry)</span>
    </h1>

    <div class="uk-card uk-card-default uk-card-body">
      <h3 class="uk-card-title title">
        Help us fund our dream house,
        <a href="https://www.zola.com/wedding/sarahandaaronoctober11/registry" target="_blank"
          ><img width="80px" src="/donate-donation-icon.png"
        /></a>
      </h3>
      <div uk-lightbox>
        <img src="/house.png" width="80%" alt="" />
        <a href="/house.png" data-caption="Caption"></a>
      </div>
      <p>
        Gifts are welcome but not expected. We aren't planning a honeymoon, and we don't need any
        material items. If you would like to give us a gift, please consider contributing to our
        DreamHouse Fund. We love living in Moss Beach, and would like to make our home the comfiest
        and loveliest we can for our family. We would love to add on bedrooms, fix the roof, and
        create a backyard oasis! Thank you so much!. We are using Zola to process
        <strong>secure</strong>
        transactions, check the options available in any of the donate buttons
        <a href="https://www.zola.com/wedding/sarahandaaronoctober11/registry" target="_blank"
          ><img width="80px" src="/public/donate-donation-icon.png"
        /></a>
      </p>
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
