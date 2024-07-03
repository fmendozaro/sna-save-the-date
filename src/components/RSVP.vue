<template>
  <div id="rsvp" class="rsvp">
    <h1
      class="uk-heading-line uk-text-center uk-h1 uk-padding-small title uk-scrollspy-inview"
      uk-scrollspy="cls:uk-animation-slide-top-small"
      style=""
    >
      <span data-v-fc62b15b="">RSVP For Dinner</span>
    </h1>
    <div uk-alert class="updates-alert uk-alert-danger">
      <a href="#" class="uk-alert-close" uk-close></a>
      <h3>Deadline for RSVP: August 12th 2024 🕰️</h3>
      <strong>
        Please RSVP and send one submission for each person so we can consider their meal preference
      </strong>
    </div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf04CYf97ZRG4bPB_EGCPlBs66eA3bJd67Nv0saUXplr-ttVQ/viewform?embedded=true"
      width="100%"
      height="673"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >
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
