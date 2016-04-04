"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TidalWave extends Card {
  constructor(game) {
    super(game, "Tidal Wave", "Mirage", "MIR");
  }
}

module.exports = TidalWave;
