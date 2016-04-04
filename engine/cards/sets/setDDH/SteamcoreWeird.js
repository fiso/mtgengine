"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteamcoreWeird extends Card {
  constructor(game) {
    super(game, "Steamcore Weird", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SteamcoreWeird;
