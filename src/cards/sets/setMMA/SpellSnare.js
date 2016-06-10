"use strict";
const Constants = require ("../../../Constants");
const SpellSnareBase = require("../setDIS/SpellSnare");

class SpellSnare extends SpellSnareBase {
  constructor (game) {
    super(game, "Spell Snare", "Modern Masters", "MMA");
  }
}

module.exports = SpellSnare;
