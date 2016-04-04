"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConfusionintheRanks extends Card {
  constructor(game) {
    super(game, "Confusion in the Ranks", "Mirrodin", "MRD");
  }
}

module.exports = ConfusionintheRanks;
