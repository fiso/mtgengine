"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../set6ED/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, "Spell Blast", "International Collector's Edition", "CEI");
  }
}

module.exports = SpellBlast;
