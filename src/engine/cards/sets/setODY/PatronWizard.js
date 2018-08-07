"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatronWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Patron Wizard", "Odyssey", "ODY");
  }
}

module.exports = PatronWizard;
