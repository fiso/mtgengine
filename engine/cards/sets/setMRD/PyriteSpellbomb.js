"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PyriteSpellbomb extends Card {
  constructor(game) {
    super(game, "Pyrite Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = PyriteSpellbomb;
