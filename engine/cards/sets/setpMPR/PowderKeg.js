"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PowderKeg extends Card {
  constructor(game) {
    super(game, "Powder Keg", "Magic Player Rewards", "pMPR");
  }
}

module.exports = PowderKeg;
