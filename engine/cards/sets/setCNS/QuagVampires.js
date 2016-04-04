"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuagVampires extends Card {
  constructor(game) {
    super(game, "Quag Vampires", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = QuagVampires;
