"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticalTeachings extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystical Teachings", "Modern Masters 2017", "MM3");
  }
}

module.exports = MysticalTeachings;
