<template>
  <div id="invitation">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title"
      uk-scrollspy="cls:uk-animation-slide-top-small"
    >
      <span>Invitation & Venue Info</span>
    </h1>
    <div
      class="uk-responsive-width uk-padding-large uk-overflow-hidden uk-padding-remove-top"
      uk-scrollspy="cls:uk-animation-slide-top-small"
    ></div>
    <h2 class="title">Timeline</h2>
    <ul class="uk-list uk-list-striped">
      <li>Guest arrival: 3:00 pm</li>
      <li>Ceremony: 3:30 pm</li>
      <li>Cocktail Hour: 4:00 pm</li>
      <li>Dinner: 5:00 pm</li>
      <li>Speeches and Toasts: 6:30 pm</li>
      <li>Cake Cutting 7:00 pm</li>
      <li>First Dances 7:15 pm</li>
      <li>Open Dancing 7:30 pm</li>
      <li>Last Call at Bar 9:30 pm</li>
      <li>Event Ends (a su casa!) 10:00 pm</li>
    </ul>

    <h2 class="title">Venue Address and Map:</h2>
    <div id="venue-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1780174732157!2d-122.49012042348932!3d37.50371932772661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f73c9e4a3a8fb%3A0xa8647fd778729d4a!2sMavericks%20House!5e0!3m2!1sen!2sus!4v1716855569768!5m2!1sen!2sus"
        width="100%"
        height="700"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <h2 class="title">Hotels Near the Venue:</h2>
    <ul class="uk-list uk-list-striped">
      <li>Beach House Hotel</li>
      <li>Harbor View Inn</li>
      <li>Oceano Hotel and Spa Half Moon Bay Harbor</li>
      <li>Inn at Mavericks</li>
      <li>Quality Inn</li>
      <li>Seal Cove Inn</li>
      <li>Additionally: check VRBO and AirB and B</li>
    </ul>

    <h2 class="title">Things to do:</h2>
    <ul class="uk-list uk-list-striped">
      <li>Fitzgerald Marine Reserve hiking and tidepools</li>
      <li>Hiking- Devils Slide, Montara Mountain Trail</li>
      <li>Beaches: Montara Beach, Half Moon Bay State Beach</li>
      <li>Half Moon Bay Downtown Shopping</li>
      <li>
        San Francisco- lots of things to do with or without kids: California Academy of Sciences,
        Fisherman's Wharf, Golden Gate Park, DeYoung Museum, lots of parks and open air areas you
        can explore.
      </li>
    </ul>
    <div id="cold">
      <h2
        class="uk-heading-line uk-text-center uk-h1 uk-padding-small title"
        uk-scrollspy="cls:uk-animation-slide-top-small"
      >
        <span>Latest Updates & Annoucements</span>
      </h2>
      <img src="/reminder.png" alt="its cold bring a jacket" />
      <div id="updates" class="uk-tile uk-tile-default">
        Updates will be posted soon, in the meantime take a look at our FAQs
      </div>

      <h2 class="title">FAQs</h2>
      <img src="/faqs.jpg" />
      <div uk-alert>
        <a href class="uk-alert-close uk-alert-warning" uk-close></a>
        <p>ℹ️ Click on each question to reveal the answer</p>
      </div>
      <ul uk-accordion>
        <li>
          <a class="uk-accordion-title" href>Q: Is there parking available at the venue?</a>
          <div class="uk-accordion-content">
            <p>A: Yes, there's plenty of space around and in the venue</p>
          </div>
        </li>
        <li class="uk-open">
          <a class="uk-accordion-title" href>Q: What's the dress code?</a>
          <div class="uk-accordion-content">
            <p>
              A: The Dress code is <strong>Cocktail Attire</strong>, we found this article very
              useful so we suggest to read this link if you are looking some guide ideas and
              inspired looks:
              <a href="https://www.brides.com/story/wedding-dress-code-explained#toc-cocktail"
                >https://www.brides.com/story/wedding-dress-code-explained#toc-cocktail</a
              >
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invitation'
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

#invitation ul li {
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
