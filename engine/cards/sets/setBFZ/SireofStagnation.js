"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SireofStagnation extends UnimplementedCard {
  constructor(game) {
    super(game, "Sire of Stagnation", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SireofStagnation;
