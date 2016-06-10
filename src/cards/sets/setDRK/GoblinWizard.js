"use strict";
const Constants = require ("../../../Constants");
const GoblinWizardBase = require("../setMED/GoblinWizard");

class GoblinWizard extends GoblinWizardBase {
  constructor (game) {
    super(game, "Goblin Wizard", "The Dark", "DRK");
  }
}

module.exports = GoblinWizard;
