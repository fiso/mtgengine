"use strict";
const Constants = require ("../../../Constants");
const SoldierBase = require("../setTC18/Soldier");

class Soldier extends SoldierBase {
  constructor (game) {
    super(game, "Soldier", "Modern Event Deck 2014 Tokens", "TMD1");
  }
}

module.exports = Soldier;
