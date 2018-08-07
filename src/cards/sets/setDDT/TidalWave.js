"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Wave", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = TidalWave;
