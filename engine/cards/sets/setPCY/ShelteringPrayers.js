"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShelteringPrayers extends Card {
  constructor(game) {
    super(game, "Sheltering Prayers", "Prophecy", "PCY");
  }
}

module.exports = ShelteringPrayers;
