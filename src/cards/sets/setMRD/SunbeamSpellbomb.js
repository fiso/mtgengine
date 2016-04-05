"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunbeamSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunbeam Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = SunbeamSpellbomb;
