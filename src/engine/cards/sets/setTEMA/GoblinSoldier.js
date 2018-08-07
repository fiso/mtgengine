"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Soldier", "Eternal Masters Tokens", "TEMA");
  }
}

module.exports = GoblinSoldier;
