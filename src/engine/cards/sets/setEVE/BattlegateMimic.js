"use strict";
const Constants = require ("../../../Constants");
const BattlegateMimicBase = require("../setHOP/BattlegateMimic");

class BattlegateMimic extends BattlegateMimicBase {
  constructor (game) {
    super(game, "Battlegate Mimic", "Eventide", "EVE");
  }
}

module.exports = BattlegateMimic;
