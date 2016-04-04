"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CouncilGuardian extends Card {
  constructor(game) {
    super(game, "Council Guardian", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CouncilGuardian;
