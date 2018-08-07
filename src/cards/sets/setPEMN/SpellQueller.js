"use strict";
const Constants = require ("../../../Constants");
const SpellQuellerBase = require("../setEMN/SpellQueller");

class SpellQueller extends SpellQuellerBase {
  constructor (game) {
    super(game, "Spell Queller", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = SpellQueller;
