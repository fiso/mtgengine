"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LizardWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Lizard Warrior", "Conspiracy", "CNS");
  }
}

module.exports = LizardWarrior;
