"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Soldier;
