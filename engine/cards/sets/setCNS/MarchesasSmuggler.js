"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarchesasSmuggler extends Card {
  constructor(game) {
    super(game, "Marchesa's Smuggler", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MarchesasSmuggler;
