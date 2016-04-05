"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticalTutor extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystical Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MysticalTutor;
