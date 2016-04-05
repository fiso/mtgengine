"use strict";
const Constants = require ("../../../Constants");
const LizardWarriorBase = require("../setCNS/LizardWarrior");

class LizardWarrior extends LizardWarriorBase {
  constructor(game) {
    super(game, "Lizard Warrior", "Portal", "POR");
  }
}

module.exports = LizardWarrior;
