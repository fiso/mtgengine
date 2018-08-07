"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorseshoeCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "Horseshoe Crab", "Masters 25", "A25");
  }
}

module.exports = HorseshoeCrab;
