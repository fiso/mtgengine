"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessScholar extends Card {
  constructor(game) {
    super(game, "Reckless Scholar", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RecklessScholar;
