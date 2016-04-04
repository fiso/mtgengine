"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdvantageousProclamation extends Card {
  constructor(game) {
    super(game, "Advantageous Proclamation", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AdvantageousProclamation;
