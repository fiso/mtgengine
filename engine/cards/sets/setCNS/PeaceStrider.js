"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PeaceStrider extends Card {
  constructor(game) {
    super(game, "Peace Strider", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PeaceStrider;
