"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedFen extends UnimplementedCard {
  constructor(game) {
    super(game, "Blighted Fen", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedFen;
