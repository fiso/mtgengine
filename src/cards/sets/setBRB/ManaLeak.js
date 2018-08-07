"use strict";
const Constants = require ("../../../Constants");
const ManaLeakBase = require("../setIMA/ManaLeak");

class ManaLeak extends ManaLeakBase {
  constructor (game) {
    super(game, "Mana Leak", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ManaLeak;
