"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Scars of Mirrodin Tokens", "TSOM");
  }
}

module.exports = Soldier;
