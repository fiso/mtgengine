"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../setTPR/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, "Spell Blast", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SpellBlast;
