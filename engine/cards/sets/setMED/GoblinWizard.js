"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinWizard extends Card {
  constructor(game) {
    super(game, "Goblin Wizard", "Masters Edition", "MED");
  }
}

module.exports = GoblinWizard;
