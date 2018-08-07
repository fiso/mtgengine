"use strict";
const Constants = require ("../../../Constants");
const BattleRattleShamanBase = require("../setBBD/BattleRattleShaman");

class BattleRattleShaman extends BattleRattleShamanBase {
  constructor (game) {
    super(game, "Battle-Rattle Shaman", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = BattleRattleShaman;
