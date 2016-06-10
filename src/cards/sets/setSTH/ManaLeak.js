"use strict";
const Constants = require ("../../../Constants");
const ManaLeakBase = require("../setpARL/ManaLeak");

class ManaLeak extends ManaLeakBase {
  constructor (game) {
    super(game, "Mana Leak", "Stronghold", "STH");
  }
}

module.exports = ManaLeak;
