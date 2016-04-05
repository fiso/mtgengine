"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofCorpses extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Corpses", "Mirage", "MIR");
  }
}

module.exports = WallofCorpses;
