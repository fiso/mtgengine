"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlindingLight extends Card {
  constructor(game) {
    super(game, "Blinding Light", "Invasion", "INV");
  }
}

module.exports = BlindingLight;
