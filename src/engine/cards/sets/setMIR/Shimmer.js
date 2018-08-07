"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shimmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Shimmer", "Mirage", "MIR");
  }
}

module.exports = Shimmer;
