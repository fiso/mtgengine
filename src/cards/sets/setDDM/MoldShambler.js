"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoldShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Mold Shambler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MoldShambler;
