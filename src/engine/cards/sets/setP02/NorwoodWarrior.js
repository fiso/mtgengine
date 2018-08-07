"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorwoodWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Norwood Warrior", "Portal Second Age", "P02");
  }
}

module.exports = NorwoodWarrior;
