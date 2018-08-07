"use strict";
const Constants = require ("../../../Constants");
const BattleMasteryBase = require("../setBBD/BattleMastery");

class BattleMastery extends BattleMasteryBase {
  constructor (game) {
    super(game, "Battle Mastery", "Magic 2015", "M15");
  }
}

module.exports = BattleMastery;
