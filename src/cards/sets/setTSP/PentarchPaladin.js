"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PentarchPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentarch Paladin", "Time Spiral", "TSP");
  }
}

module.exports = PentarchPaladin;
