"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaticOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Static Orb", "Kaladesh Inventions", "MPS");
  }
}

module.exports = StaticOrb;
