"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NihilSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Nihil Spellbomb", "Masters 25", "A25");
  }
}

module.exports = NihilSpellbomb;
