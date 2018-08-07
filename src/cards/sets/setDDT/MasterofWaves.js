"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofWaves extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of Waves", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = MasterofWaves;
