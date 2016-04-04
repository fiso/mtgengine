"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CurseofWizardry extends Card {
  constructor(game) {
    super(game, "Curse of Wizardry", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CurseofWizardry;
