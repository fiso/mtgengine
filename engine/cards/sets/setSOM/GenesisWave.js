"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GenesisWave extends Card {
  constructor(game) {
    super(game, "Genesis Wave", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GenesisWave;
