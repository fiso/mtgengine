"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepSeaKraken extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep-Sea Kraken", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = DeepSeaKraken;
