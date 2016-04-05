"use strict";
const Constants = require ("../../../Constants");
const SpellBlastBase = require("../set6ED/SpellBlast");

class SpellBlast extends SpellBlastBase {
  constructor(game) {
    super(game, "Spell Blast", "Fifth Edition", "5ED");
  }
}

module.exports = SpellBlast;
