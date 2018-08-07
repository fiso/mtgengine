"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PanicSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Panic Spellbomb", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = PanicSpellbomb;
