"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninSnarecaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Snarecaster", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LeoninSnarecaster;
