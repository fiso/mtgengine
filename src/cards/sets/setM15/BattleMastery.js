"use strict";
const Constants = require ("../../../Constants");
const BattleMasteryBase = require("../setDTK/BattleMastery");

class BattleMastery extends BattleMasteryBase {
  constructor (game) {
    super(game, "Battle Mastery", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BattleMastery;
