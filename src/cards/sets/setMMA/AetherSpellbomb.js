"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Spellbomb", "Modern Masters", "MMA");
  }
}

module.exports = AetherSpellbomb;
