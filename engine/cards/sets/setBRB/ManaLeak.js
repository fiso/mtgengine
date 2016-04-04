"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaLeakBase = require("../setpARL/ManaLeak.js");

class ManaLeak extends ManaLeakBase {
  constructor(game) {
    super(game, "Mana Leak", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ManaLeak;
