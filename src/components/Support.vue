<template>
  <div id="faqs">
    <!-- <h1 class="uk-heading-line uk-text-center uk-h1 uk-padding-small title" uk-scrollspy="cls:uk-animation-slide-top-small"><span>Supported</span></h1> -->
    <h2>Timeline</h2>
    <div class="wrapper">
      <div class="uk-responsive-width uk-visible@l">
        <h3>
          <ul>
            <li>Guest arrival: 2:50 pm to 3:20 pm</li>
            <li>Ceremony: 3:30 pm</li>
            <li>Dinner: 5:00 pm</li>
          </ul>
        </h3>
        <h3>Venue:</h3>
        <p>Mavericks House P.O. Box 879 El Granada, CA 94018 (650) 728-3528</p>

        <h3>Hotels Near the Venue:</h3>
        <ul>
          <li>Beach House Hotel</li>
          <li>Harbor View Inn</li>
          <li>Oceano Hotel and Spa Half Moon Bay Harbor</li>
          <li>Inn at Mavericks</li>
          <li>Quality Inn</li>
          <li>Seal Cove Inn</li>
          <li>Additionally: check VRBO and AirB and B</li>
        </ul>

        <h3>Things to do:</h3>
        <ul>
          <li>Fitzgerald Marine Reserve hiking and tidepools</li>
          <li>Hiking- Devils Slide, Montara Mountain Trail</li>
          <li>Beaches: Montara Beach, Half Moon Bay State Beach</li>
          <li>Half Moon Bay Downtown Shopping</li>
          <li>
            San Francisco- lots of things to do with or without kids: California Academy of
            Sciences, Fisherman's Wharf, Golden Gate Park, DeYoung Museum, lots of parks and open
            air areas you can explore.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div>
    <h3>Cash App Pay QR Code:</h3>
    <img src="/website-qr-link.png" alt="" />
    OR we have credit card options using a secure Stripe payment system
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
