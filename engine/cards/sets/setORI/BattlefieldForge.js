"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattlefieldForgeBase = require("../setAPC/BattlefieldForge.js");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor(game) {
    super(game, "Battlefield Forge", "Magic Origins", "ORI");
  }
}

module.exports = BattlefieldForge;
