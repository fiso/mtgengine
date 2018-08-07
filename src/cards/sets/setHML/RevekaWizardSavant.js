"use strict";
const Constants = require ("../../../Constants");
const RevekaWizardSavantBase = require("../setME3/RevekaWizardSavant");

class RevekaWizardSavant extends RevekaWizardSavantBase {
  constructor (game) {
    super(game, "Reveka, Wizard Savant", "Homelands", "HML");
  }
}

module.exports = RevekaWizardSavant;
