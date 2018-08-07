"use strict";
const Constants = require ("../../../Constants");
const SpellSnareBase = require("../setBBD/SpellSnare");

class SpellSnare extends SpellSnareBase {
  constructor (game) {
    super(game, "Spell Snare", "Dissension", "DIS");
  }
}

module.exports = SpellSnare;
