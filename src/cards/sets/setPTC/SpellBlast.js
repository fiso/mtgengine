"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../setTPR/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, "Spell Blast", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = SpellBlast;
