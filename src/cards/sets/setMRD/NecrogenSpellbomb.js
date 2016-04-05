"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecrogenSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Necrogen Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = NecrogenSpellbomb;
