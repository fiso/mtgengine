"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleRattleShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle-Rattle Shaman", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BattleRattleShaman;
