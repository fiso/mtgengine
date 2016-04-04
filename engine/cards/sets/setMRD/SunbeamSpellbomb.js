"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunbeamSpellbomb extends Card {
  constructor(game) {
    super(game, "Sunbeam Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = SunbeamSpellbomb;
