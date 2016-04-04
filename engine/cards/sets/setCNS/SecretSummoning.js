"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecretSummoning extends Card {
  constructor(game) {
    super(game, "Secret Summoning", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SecretSummoning;
