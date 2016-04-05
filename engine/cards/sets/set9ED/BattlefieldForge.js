"use strict";
const Constants = require ("../../../Constants");
const BattlefieldForgeBase = require("../setAPC/BattlefieldForge");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor(game) {
    super(game, "Battlefield Forge", "Ninth Edition", "9ED");
  }
}

module.exports = BattlefieldForge;
