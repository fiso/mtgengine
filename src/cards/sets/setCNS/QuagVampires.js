"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuagVampires extends UnimplementedCard {
  constructor (game) {
    super(game, "Quag Vampires", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = QuagVampires;
