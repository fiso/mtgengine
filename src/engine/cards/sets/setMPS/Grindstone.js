"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grindstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Grindstone", "Kaladesh Inventions", "MPS");
  }
}

module.exports = Grindstone;
