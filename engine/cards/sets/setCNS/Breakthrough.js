"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Breakthrough extends Card {
  constructor(game) {
    super(game, "Breakthrough", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Breakthrough;
