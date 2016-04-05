"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockshardElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Rockshard Elemental", "Legions", "LGN");
  }
}

module.exports = RockshardElemental;
