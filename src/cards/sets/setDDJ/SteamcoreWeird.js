"use strict";
const Constants = require ("../../../Constants");
const SteamcoreWeirdBase = require("../setDDH/SteamcoreWeird");

class SteamcoreWeird extends SteamcoreWeirdBase {
  constructor (game) {
    super(game, "Steamcore Weird", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SteamcoreWeird;
