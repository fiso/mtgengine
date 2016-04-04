"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoreSeeker extends Card {
  constructor(game) {
    super(game, "Lore Seeker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = LoreSeeker;
