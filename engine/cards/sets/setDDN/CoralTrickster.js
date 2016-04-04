"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralTrickster extends UnimplementedCard {
  constructor(game) {
    super(game, "Coral Trickster", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = CoralTrickster;
