"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamahlPitFighter extends UnimplementedCard {
  constructor (game) {
    super(game, "Kamahl, Pit Fighter", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = KamahlPitFighter;
