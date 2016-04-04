"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattleRattleShaman extends Card {
  constructor(game) {
    super(game, "Battle-Rattle Shaman", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BattleRattleShaman;
