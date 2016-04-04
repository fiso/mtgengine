"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DacksDuplicate extends Card {
  constructor(game) {
    super(game, "Dack's Duplicate", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DacksDuplicate;
