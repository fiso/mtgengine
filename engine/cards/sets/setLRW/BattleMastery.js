"use strict";
const Constants = require ("../../../Constants");
const BattleMasteryBase = require("../setDTK/BattleMastery");

class BattleMastery extends BattleMasteryBase {
  constructor(game) {
    super(game, "Battle Mastery", "Lorwyn", "LRW");
  }
}

module.exports = BattleMastery;
