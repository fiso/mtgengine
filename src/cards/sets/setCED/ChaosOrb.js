"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Orb", "Collector's Edition", "CED");
  }
}

module.exports = ChaosOrb;
