"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamcoreWeird extends UnimplementedCard {
  constructor(game) {
    super(game, "Steamcore Weird", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SteamcoreWeird;
