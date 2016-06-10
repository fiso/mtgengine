"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FearsomeAwakening extends UnimplementedCard {
  constructor (game) {
    super(game, "Fearsome Awakening", "Fate Reforged", "FRF");
  }
}

module.exports = FearsomeAwakening;
