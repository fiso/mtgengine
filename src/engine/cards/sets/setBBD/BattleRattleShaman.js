"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleRattleShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Battle-Rattle Shaman", "Battlebond", "BBD");
  }
}

module.exports = BattleRattleShaman;
