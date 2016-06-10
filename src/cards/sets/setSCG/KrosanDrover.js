"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanDrover extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Drover", "Scourge", "SCG");
  }
}

module.exports = KrosanDrover;
