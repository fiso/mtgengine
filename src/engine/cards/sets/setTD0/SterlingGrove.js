"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SterlingGrove extends UnimplementedCard {
  constructor (game) {
    super(game, "Sterling Grove", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = SterlingGrove;
