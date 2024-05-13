<template>
  <div id="rsvp" class="rsvp">
    <h3>
      <h4>RSVP for dinner</h4>
      <form action="">
        <p>We have the following Options</p>
        <fieldset>
          <legend>Select a main dinner plate:</legend>
          <div>
            <input type="radio" id="chicken" name="chicken" value="chicken" checked />
            <label for="chicken">Chicken</label>
          </div>

          <div>
            <input type="radio" id="salmon" name="salmon" value="salmon" checked />
            <label for="salmon">Salmon</label>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <input type="text" id="kids" name="kids" value="0" />
            <label for="kids">Bringing kids, How Many?</label>
            <i>Kids meal: fruit, chicken tenders, Mac n cheese</i>
          </div>
        </fieldset>
      </form>
      <ul>
        <li>Guest arrival: 2:50 pm to 3:20 pm</li>
        <li>Ceremony: 3:30 pm</li>
        <li>Dinner: 5:00 pm</li>
      </ul>
    </h3>
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
