"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Duel Decks: Elspeth vs. Tezzeret Tokens", "TDDF");
  }
}

module.exports = Soldier;
