"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetalFatigue extends UnimplementedCard {
  constructor (game) {
    super(game, "Metal Fatigue", "Darksteel", "DST");
  }
}

module.exports = MetalFatigue;
