"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedFen extends UnimplementedCard {
  constructor (game) {
    super(game, "Blighted Fen", "Friday Night Magic 2016", "F16");
  }
}

module.exports = BlightedFen;
