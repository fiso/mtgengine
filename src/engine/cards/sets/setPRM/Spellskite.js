"use strict";
const Constants = require ("../../../Constants");
const SpellskiteBase = require("../setJ17/Spellskite");

class Spellskite extends SpellskiteBase {
  constructor (game) {
    super(game, "Spellskite", "Magic Online Promos", "PRM");
  }
}

module.exports = Spellskite;
