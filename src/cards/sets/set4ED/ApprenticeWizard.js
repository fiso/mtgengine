"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApprenticeWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Apprentice Wizard", "Fourth Edition", "4ED");
  }
}

module.exports = ApprenticeWizard;
