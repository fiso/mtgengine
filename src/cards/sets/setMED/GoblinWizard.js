"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Wizard", "Masters Edition", "MED");
  }
}

module.exports = GoblinWizard;
