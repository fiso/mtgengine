"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KruinStriker extends UnimplementedCard {
  constructor (game) {
    super(game, "Kruin Striker", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = KruinStriker;
