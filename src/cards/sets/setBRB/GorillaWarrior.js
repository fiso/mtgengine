"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorilla Warrior", "Battle Royale Box Set", "BRB");
  }
}

module.exports = GorillaWarrior;
