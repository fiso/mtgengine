"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PanicSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Panic Spellbomb", "Commander 2014", "C14");
  }
}

module.exports = PanicSpellbomb;
