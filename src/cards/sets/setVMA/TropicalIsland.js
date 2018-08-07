"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TropicalIsland extends UnimplementedCard {
  constructor (game) {
    super(game, "Tropical Island", "Vintage Masters", "VMA");
  }
}

module.exports = TropicalIsland;
