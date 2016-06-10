"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhituEncampment extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghitu Encampment", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = GhituEncampment;
