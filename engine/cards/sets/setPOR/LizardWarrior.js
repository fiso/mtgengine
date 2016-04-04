"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LizardWarriorBase = require("../setCNS/LizardWarrior.js");

class LizardWarrior extends LizardWarriorBase {
  constructor(game) {
    super(game, "Lizard Warrior", "Portal", "POR");
  }
}

module.exports = LizardWarrior;
