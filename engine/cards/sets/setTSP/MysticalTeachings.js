"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticalTeachings extends Card {
  constructor(game) {
    super(game, "Mystical Teachings", "Time Spiral", "TSP");
  }
}

module.exports = MysticalTeachings;
