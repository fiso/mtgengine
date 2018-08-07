"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeatWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Heat Wave", "Visions", "VIS");
  }
}

module.exports = HeatWave;
