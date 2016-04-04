"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWizardBase = require("../setMED/GoblinWizard.js");

class GoblinWizard extends GoblinWizardBase {
  constructor(game) {
    super(game, "Goblin Wizard", "The Dark", "DRK");
  }
}

module.exports = GoblinWizard;
