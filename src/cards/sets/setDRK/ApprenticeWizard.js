"use strict";
const Constants = require ("../../../Constants");
const ApprenticeWizardBase = require("../setMED/ApprenticeWizard");

class ApprenticeWizard extends ApprenticeWizardBase {
  constructor (game) {
    super(game, "Apprentice Wizard", "The Dark", "DRK");
  }
}

module.exports = ApprenticeWizard;
