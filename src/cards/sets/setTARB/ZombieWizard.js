"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieWizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Wizard", "Alara Reborn Tokens", "TARB");
  }
}

module.exports = ZombieWizard;
