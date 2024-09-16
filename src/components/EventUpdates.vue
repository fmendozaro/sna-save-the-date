<template>
  <div id="EventUpdates">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title"
      uk-scrollspy="cls:uk-animation-slide-top-small"
    >
      <span>Events and Updates</span>
    </h1>
    <div
      class="uk-responsive-width uk-padding-large uk-overflow-hidden uk-padding-remove-top"
      uk-scrollspy="cls:uk-animation-slide-top-small"
    ></div>

    <div class="uk-container uk-padding">
      <div class="uk-timeline">
        <div class="uk-timeline-item">
          <div class="uk-timeline-icon">
            <span class="uk-badge"><span uk-icon="check"></span></span>
          </div>
          <div class="uk-timeline-content">
            <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <h3 class="uk-card-title"><time datetime="2020-07-08">July 8</time></h3>
                  <span class="uk-label uk-label-success uk-margin-auto-left">Feature</span>
                </div>
              </div>
              <div class="uk-card-body">
                <p class="uk-text-success">
                  Fully responsive timeline you can add to your UIkit 3 project
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-timeline-item">
          <div class="uk-timeline-icon">
            <span class="uk-badge"><span uk-icon="check"></span></span>
          </div>
          <div class="uk-timeline-content">
            <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <h3 class="uk-card-title"><time datetime="2020-07-07">July 7</time></h3>
                  <span class="uk-label uk-label-warning uk-margin-auto-left">Test</span>
                </div>
              </div>
              <div class="uk-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-timeline-item">
          <div class="uk-timeline-icon">
            <span class="uk-badge"><span uk-icon="check"></span></span>
          </div>
          <div class="uk-timeline-content">
            <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <h3 class="uk-card-title"><time datetime="2020-07-06">July 6</time></h3>
                  <span class="uk-label uk-label-danger uk-margin-auto-left">Fix</span>
                </div>
              </div>
              <div class="uk-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </p>
              </div>
            </div>
            <a href="#"
              ><span class="uk-margin-small-right" uk-icon="triangle-down"></span>Load more</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsUpdates'
}
</script>

<style lang="scss" scoped>
$colorprimary: #dd183f;

#invitation {
  padding-top: 1px;
  padding-bottom: 50px;
  background-color: #c1ebf7;
  color: black;
}

#cold {
  height: auto;
}

#cold img {
  height: auto;
  width: 80%;
}

#invitation,
ul li {
  align-items: flex-start;
  list-style-type: square;
}

.countdown * {
  font-size: 30px !important;
  color: $colorprimary !important;
}
.uk-countdown-number,
.uk-countdown-separator {
  line-height: 1 !important;
}
.countdown .uk-countdown-label {
  font-size: 20px !important;
}
.countdown .uk-grid > * {
  padding-left: 10px !important;
}
.text-nama {
  padding-top: 10px;
  padding-bottom: 10px !important;
}
.text-nama h1 {
  font-size: 50px !important;
  margin: 0 !important;
}
.text-nama h5,
.text-nama h3 {
  margin: 0 !important;
}
.text-nama p,
.text-nama h4 {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
.uk-width-1-4 {
  padding: 0 !important;
  margin: 0 !important;
}
h4 {
  margin-top: 15px !important;
}
h5 {
  color: #666666 !important;
}

#updates ul li {
  text-align: left;
}

.uk-timeline .uk-timeline-item .uk-card {
  max-height: 300px;
}

.uk-timeline .uk-timeline-item {
  display: flex;
  position: relative;
}

.uk-timeline .uk-timeline-item::before {
  background: #dadee4;
  content: '';
  height: 100%;
  left: 19px;
  position: absolute;
  top: 20px;
  width: 2px;
  z-index: -1;
}

.uk-timeline .uk-timeline-item .uk-timeline-icon .uk-badge {
  margin-top: 20px;
  width: 40px;
  height: 40px;
}

.uk-timeline .uk-timeline-item .uk-timeline-content {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0 0 0 1rem;
}

@media screen and (max-width: 1024px) {
  .countdown * {
    font-size: 20px !important;
    color: $colorprimary !important;
  }
  .uk-countdown-number,
  .uk-countdown-separator {
    line-height: 1 !important;
  }
  .countdown .uk-countdown-label {
    font-size: 12px !important;
  }
  .countdown .uk-grid > * {
    padding-left: 5px !important;
  }
  .text-nama h1 {
    font-size: 27px !important;
  }
  .text-nama h5 {
    font-size: 12px !important;
  }
}
</style>
