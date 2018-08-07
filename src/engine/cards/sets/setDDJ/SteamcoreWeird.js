"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteamcoreWeird extends UnimplementedCard {
  constructor (game) {
    super(game, "Steamcore Weird", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SteamcoreWeird;
