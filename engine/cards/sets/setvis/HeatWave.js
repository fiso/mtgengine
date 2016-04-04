"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeatWave extends Card {
  constructor(game) {
    super(game, "Heat Wave", "Visions", "VIS");
  }
}

module.exports = HeatWave;
