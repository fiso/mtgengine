"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrudgeKeeper extends Card {
  constructor(game) {
    super(game, "Grudge Keeper", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GrudgeKeeper;
