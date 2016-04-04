"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HowlingWolf extends Card {
  constructor(game) {
    super(game, "Howling Wolf", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HowlingWolf;
