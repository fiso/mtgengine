"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumanWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Human Wizard", "Eldritch Moon Tokens", "TEMN");
  }
}

module.exports = HumanWizard;
