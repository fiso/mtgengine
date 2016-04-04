"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevekaWizardSavantBase = require("../setHML/RevekaWizardSavant.js");

class RevekaWizardSavant extends RevekaWizardSavantBase {
  constructor(game) {
    super(game, "Reveka, Wizard Savant", "Masters Edition III", "ME3");
  }
}

module.exports = RevekaWizardSavant;
