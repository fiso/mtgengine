"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorinLordofInnistrad extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorin, Lord of Innistrad", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SorinLordofInnistrad;
