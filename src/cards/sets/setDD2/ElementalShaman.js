"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Elemental Shaman", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = ElementalShaman;
