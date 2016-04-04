"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrinMasterWizard extends Card {
  constructor(game) {
    super(game, "Barrin, Master Wizard", "Urza's Saga", "USG");
  }
}

module.exports = BarrinMasterWizard;
