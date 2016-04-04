"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChargingBandits extends Card {
  constructor(game) {
    super(game, "Charging Bandits", "Portal", "POR");
  }
}

module.exports = ChargingBandits;
