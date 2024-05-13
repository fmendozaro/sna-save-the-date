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
