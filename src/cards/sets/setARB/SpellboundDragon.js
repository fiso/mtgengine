"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellboundDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellbound Dragon", "Alara Reborn", "ARB");
  }
}

module.exports = SpellboundDragon;
