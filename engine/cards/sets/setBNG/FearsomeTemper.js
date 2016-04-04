"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FearsomeTemper extends Card {
  constructor(game) {
    super(game, "Fearsome Temper", "Born of the Gods", "BNG");
  }
}

module.exports = FearsomeTemper;
