"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyriteSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyrite Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = PyriteSpellbomb;
