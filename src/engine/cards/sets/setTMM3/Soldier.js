"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Soldier;
