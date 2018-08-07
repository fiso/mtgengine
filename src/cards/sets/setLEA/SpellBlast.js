"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../setTPR/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, "Spell Blast", "Limited Edition Alpha", "LEA");
  }
}

module.exports = SpellBlast;
