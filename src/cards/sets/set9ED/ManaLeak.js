"use strict";
const Constants = require ("../../../Constants");
const ManaLeakBase = require("../setIMA/ManaLeak");

class ManaLeak extends ManaLeakBase {
  constructor (game) {
    super(game, "Mana Leak", "Ninth Edition", "9ED");
  }
}

module.exports = ManaLeak;
