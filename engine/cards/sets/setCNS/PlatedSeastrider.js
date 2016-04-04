"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlatedSeastrider extends Card {
  constructor(game) {
    super(game, "Plated Seastrider", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PlatedSeastrider;
