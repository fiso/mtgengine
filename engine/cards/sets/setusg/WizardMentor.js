"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WizardMentor extends Card {
  constructor(game) {
    super(game, "Wizard Mentor", "Urza's Saga", "USG");
  }
}

module.exports = WizardMentor;
