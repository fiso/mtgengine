"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattleScreechBase = require("../setJUD/BattleScreech.js");

class BattleScreech extends BattleScreechBase {
  constructor(game) {
    super(game, "Battle Screech", "Vintage Masters", "VMA");
  }
}

module.exports = BattleScreech;
