"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NecrogenSpellbomb extends Card {
  constructor(game) {
    super(game, "Necrogen Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = NecrogenSpellbomb;
