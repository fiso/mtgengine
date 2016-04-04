"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifesparkSpellbomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifespark Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = LifesparkSpellbomb;
