"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrinMasterWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrin, Master Wizard", "Urza's Saga", "USG");
  }
}

module.exports = BarrinMasterWizard;
