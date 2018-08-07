"use strict";
const Constants = require ("../../../Constants");
const BattlefieldForgeBase = require("../setORI/BattlefieldForge");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor (game) {
    super(game, "Battlefield Forge", "Tenth Edition", "10E");
  }
}

module.exports = BattlefieldForge;
