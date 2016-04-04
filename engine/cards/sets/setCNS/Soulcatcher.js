"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soulcatcher extends Card {
  constructor(game) {
    super(game, "Soulcatcher", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Soulcatcher;
