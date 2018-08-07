"use strict";
const Constants = require ("../../../Constants");
const BattleRampartBase = require("../setBBD/BattleRampart");

class BattleRampart extends BattleRampartBase {
  constructor (game) {
    super(game, "Battle Rampart", "Mercadian Masques", "MMQ");
  }
}

module.exports = BattleRampart;
