"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoastalWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Coastal Wizard", "Portal Second Age", "P02");
  }
}

module.exports = CoastalWizard;
