"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Magic 2012 Tokens", "TM12");
  }
}

module.exports = Soldier;
