"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattlefieldForgeBase = require("../setAPC/BattlefieldForge.js");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor(game) {
    super(game, "Battlefield Forge", "Tenth Edition", "10E");
  }
}

module.exports = BattlefieldForge;
