"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoriEnRuinDiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Jori En, Ruin Diver", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = JoriEnRuinDiver;
