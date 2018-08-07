"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Trinisphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Trinisphere", "Kaladesh Inventions", "MPS");
  }
}

module.exports = Trinisphere;
