"use strict";
const Constants = require ("../../../Constants");
const ManaLeakBase = require("../setIMA/ManaLeak");

class ManaLeak extends ManaLeakBase {
  constructor (game) {
    super(game, "Mana Leak", "World Championship Decks 2003", "WC03");
  }
}

module.exports = ManaLeak;
