"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcidRain extends Card {
  constructor(game) {
    super(game, "Acid Rain", "Legends", "LEG");
  }
}

module.exports = AcidRain;
