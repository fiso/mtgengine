"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofthePearlTrident extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of the Pearl Trident", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = MasterofthePearlTrident;
