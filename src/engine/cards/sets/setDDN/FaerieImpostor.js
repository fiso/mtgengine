"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieImpostor extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Impostor", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FaerieImpostor;
