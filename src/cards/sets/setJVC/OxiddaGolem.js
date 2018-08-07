"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OxiddaGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Oxidda Golem", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = OxiddaGolem;
