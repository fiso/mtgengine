"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryStreetDenizen extends UnimplementedCard {
  constructor (game) {
    super(game, "Foundry Street Denizen", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = FoundryStreetDenizen;
