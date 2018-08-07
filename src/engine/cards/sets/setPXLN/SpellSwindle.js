"use strict";
const Constants = require ("../../../Constants");
const SpellSwindleBase = require("../setXLN/SpellSwindle");

class SpellSwindle extends SpellSwindleBase {
  constructor (game) {
    super(game, "Spell Swindle", "Ixalan Promos", "PXLN");
  }
}

module.exports = SpellSwindle;
