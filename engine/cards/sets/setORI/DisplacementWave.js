"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisplacementWave extends Card {
  constructor(game) {
    super(game, "Displacement Wave", "Magic Origins", "ORI");
  }
}

module.exports = DisplacementWave;
