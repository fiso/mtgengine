"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErtaiWizardAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Ertai, Wizard Adept", "Exodus", "EXO");
  }
}

module.exports = ErtaiWizardAdept;
