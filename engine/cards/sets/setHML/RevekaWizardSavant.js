"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevekaWizardSavant extends UnimplementedCard {
  constructor(game) {
    super(game, "Reveka, Wizard Savant", "Homelands", "HML");
  }
}

module.exports = RevekaWizardSavant;
