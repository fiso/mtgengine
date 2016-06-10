"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticalTeachings extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystical Teachings", "Time Spiral", "TSP");
  }
}

module.exports = MysticalTeachings;
