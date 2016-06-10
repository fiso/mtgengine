"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WizardMentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Wizard Mentor", "Urza's Saga", "USG");
  }
}

module.exports = WizardMentor;
