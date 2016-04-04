"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyriteSpellbombBase = require("../setMRD/PyriteSpellbomb.js");

class PyriteSpellbomb extends PyriteSpellbombBase {
  constructor(game) {
    super(game, "Pyrite Spellbomb", "Modern Masters", "MMA");
  }
}

module.exports = PyriteSpellbomb;
