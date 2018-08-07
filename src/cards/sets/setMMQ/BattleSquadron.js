"use strict";
const Constants = require ("../../../Constants");
const BattleSquadronBase = require("../setDDT/BattleSquadron");

class BattleSquadron extends BattleSquadronBase {
  constructor (game) {
    super(game, "Battle Squadron", "Mercadian Masques", "MMQ");
  }
}

module.exports = BattleSquadron;
