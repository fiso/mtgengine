"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpellboundDragon extends Card {
  constructor(game) {
    super(game, "Spellbound Dragon", "Alara Reborn", "ARB");
  }
}

module.exports = SpellboundDragon;
