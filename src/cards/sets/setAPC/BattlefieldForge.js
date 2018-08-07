"use strict";
const Constants = require ("../../../Constants");
const BattlefieldForgeBase = require("../setORI/BattlefieldForge");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor (game) {
    super(game, "Battlefield Forge", "Apocalypse", "APC");
  }
}

module.exports = BattlefieldForge;
