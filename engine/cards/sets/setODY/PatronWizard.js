"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatronWizard extends Card {
  constructor(game) {
    super(game, "Patron Wizard", "Odyssey", "ODY");
  }
}

module.exports = PatronWizard;
