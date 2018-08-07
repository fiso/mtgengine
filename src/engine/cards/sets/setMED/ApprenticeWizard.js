"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApprenticeWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Apprentice Wizard", "Masters Edition", "MED");
  }
}

module.exports = ApprenticeWizard;
