"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheJar extends UnimplementedCard {
  constructor (game) {
    super(game, "Magus of the Jar", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheJar;
