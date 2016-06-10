"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Spellbomb", "Archenemy", "ARC");
  }
}

module.exports = AetherSpellbomb;
