"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LizardWarrior extends Card {
  constructor(game) {
    super(game, "Lizard Warrior", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = LizardWarrior;
