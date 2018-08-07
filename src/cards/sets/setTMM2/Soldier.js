"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Soldier;
