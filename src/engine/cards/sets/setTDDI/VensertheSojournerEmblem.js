"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VensertheSojournerEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Venser, the Sojourner Emblem", "Duel Decks: Venser vs. Koth Tokens", "TDDI");
  }
}

module.exports = VensertheSojournerEmblem;
