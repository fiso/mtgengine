"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BattlefieldForgeBase = require("../setAPC/BattlefieldForge.js");

class BattlefieldForge extends BattlefieldForgeBase {
  constructor(game) {
    super(game, "Battlefield Forge", "Ninth Edition", "9ED");
  }
}

module.exports = BattlefieldForge;
