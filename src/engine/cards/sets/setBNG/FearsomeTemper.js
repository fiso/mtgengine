"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FearsomeTemper extends UnimplementedCard {
  constructor (game) {
    super(game, "Fearsome Temper", "Born of the Gods", "BNG");
  }
}

module.exports = FearsomeTemper;
