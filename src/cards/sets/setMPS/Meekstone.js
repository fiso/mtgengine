"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meekstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Meekstone", "Kaladesh Inventions", "MPS");
  }
}

module.exports = Meekstone;
