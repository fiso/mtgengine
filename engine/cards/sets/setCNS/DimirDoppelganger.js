"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirDoppelganger extends Card {
  constructor(game) {
    super(game, "Dimir Doppelganger", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DimirDoppelganger;
