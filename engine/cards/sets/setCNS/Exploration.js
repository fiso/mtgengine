"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Exploration extends Card {
  constructor(game) {
    super(game, "Exploration", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Exploration;
