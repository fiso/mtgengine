"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WinterOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Winter Orb", "Collector's Edition", "CED");
  }
}

module.exports = WinterOrb;
