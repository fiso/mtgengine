"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErtaiWizardAdept extends Card {
  constructor(game) {
    super(game, "Ertai, Wizard Adept", "Exodus", "EXO");
  }
}

module.exports = ErtaiWizardAdept;
