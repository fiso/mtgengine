"use strict";
const Constants = require ("../../../Constants");
const BattlefieldForgeBase = require("../setAPC/BattlefieldForge");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor(game) {
    super(game, "Battlefield Forge", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BattlefieldForge;
