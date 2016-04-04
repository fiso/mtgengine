"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gamekeeper extends Card {
  constructor(game) {
    super(game, "Gamekeeper", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Gamekeeper;
