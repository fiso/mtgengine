"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BragosFavor extends Card {
  constructor(game) {
    super(game, "Brago's Favor", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BragosFavor;
