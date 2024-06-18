<template>
  <div id="support" class="faqs">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title uk-scrollspy-inview"
      uk-scrollspy="cls:uk-animation-slide-top-small"
      style=""
    >
      <span data-v-fc62b15b="">Help us fund our dreamhouse</span>
    </h1>
    <h3>Stripe QR Code:</h3>
    <img width="100px" src="/stripe-qr.png" alt="" />
    OR we have a credit card option using a secure Stripe payment system
    <br />
    <stripe-buy-button
      buy-button-id="buy_btn_1PSqKiEwxnaRaq24mhtC22wb"
      publishable-key="pk_test_51PSqE8EwxnaRaq24wFVH631E6wPEYINzrfxuCaidnEUPJOhj6ZLi9oMkMH5xQ5Q6c9Xot5UJXjYLdDqbfu1MHXAL00hY7Rw8OE"
    >
    </stripe-buy-button>
  </div>
</template>
<script>
export default {
  name: 'Support'
}
</script>

<style lang="css" scoped>
#support {
  background-color: #c1ebf7;
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
