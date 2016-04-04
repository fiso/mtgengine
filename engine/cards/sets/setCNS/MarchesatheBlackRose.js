"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarchesatheBlackRose extends Card {
  constructor(game) {
    super(game, "Marchesa, the Black Rose", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MarchesatheBlackRose;
