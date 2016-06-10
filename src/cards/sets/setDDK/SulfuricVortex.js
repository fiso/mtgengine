"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfuricVortex extends UnimplementedCard {
  constructor (game) {
    super(game, "Sulfuric Vortex", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SulfuricVortex;
