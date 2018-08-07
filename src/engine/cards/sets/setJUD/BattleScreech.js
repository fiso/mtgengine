"use strict";
const Constants = require ("../../../Constants");
const BattleScreechBase = require("../setVMA/BattleScreech");

class BattleScreech extends BattleScreechBase {
  constructor (game) {
    super(game, "Battle Screech", "Judgment", "JUD");
  }
}

module.exports = BattleScreech;
