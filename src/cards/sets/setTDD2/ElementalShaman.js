"use strict";
const Constants = require ("../../../Constants");
const ElementalShamanBase = require("../setTCM2/ElementalShaman");

class ElementalShaman extends ElementalShamanBase {
  constructor (game) {
    super(game, "Elemental Shaman", "Duel Decks: Jace vs. Chandra Tokens", "TDD2");
  }
}

module.exports = ElementalShaman;
