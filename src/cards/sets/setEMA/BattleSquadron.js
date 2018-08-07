"use strict";
const Constants = require ("../../../Constants");
const BattleSquadronBase = require("../setDDT/BattleSquadron");

class BattleSquadron extends BattleSquadronBase {
  constructor (game) {
    super(game, "Battle Squadron", "Eternal Masters", "EMA");
  }
}

module.exports = BattleSquadron;
