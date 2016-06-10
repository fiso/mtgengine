"use strict";
const Constants = require ("../../../Constants");
const BattlegateMimicBase = require("../setEVE/BattlegateMimic");

class BattlegateMimic extends BattlegateMimicBase {
  constructor (game) {
    super(game, "Battlegate Mimic", "Planechase", "HOP");
  }
}

module.exports = BattlegateMimic;
