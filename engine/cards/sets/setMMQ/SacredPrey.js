"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredPrey extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacred Prey", "Mercadian Masques", "MMQ");
  }
}

module.exports = SacredPrey;
