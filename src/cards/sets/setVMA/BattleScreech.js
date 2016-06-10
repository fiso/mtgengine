"use strict";
const Constants = require ("../../../Constants");
const BattleScreechBase = require("../setJUD/BattleScreech");

class BattleScreech extends BattleScreechBase {
  constructor (game) {
    super(game, "Battle Screech", "Vintage Masters", "VMA");
  }
}

module.exports = BattleScreech;
