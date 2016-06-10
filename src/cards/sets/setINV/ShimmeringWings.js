"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShimmeringWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimmering Wings", "Invasion", "INV");
  }
}

module.exports = ShimmeringWings;
