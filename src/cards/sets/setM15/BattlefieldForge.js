"use strict";
const Constants = require ("../../../Constants");
const BattlefieldForgeBase = require("../setORI/BattlefieldForge");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor (game) {
    super(game, "Battlefield Forge", "Magic 2015", "M15");
  }
}

module.exports = BattlefieldForge;
