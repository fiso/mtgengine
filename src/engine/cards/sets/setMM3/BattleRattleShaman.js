"use strict";
const Constants = require ("../../../Constants");
const BattleRattleShamanBase = require("../setBBD/BattleRattleShaman");

class BattleRattleShaman extends BattleRattleShamanBase {
  constructor (game) {
    super(game, "Battle-Rattle Shaman", "Modern Masters 2017", "MM3");
  }
}

module.exports = BattleRattleShaman;
