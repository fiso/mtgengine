"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../set6ED/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor (game) {
    super(game, "Spell Blast", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SpellBlast;
