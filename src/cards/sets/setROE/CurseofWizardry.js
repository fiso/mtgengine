"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurseofWizardry extends UnimplementedCard {
  constructor (game) {
    super(game, "Curse of Wizardry", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = CurseofWizardry;
