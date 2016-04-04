"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteamcoreWeirdBase = require("../setDDH/SteamcoreWeird.js");

class SteamcoreWeird extends SteamcoreWeirdBase {
  constructor(game) {
    super(game, "Steamcore Weird", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SteamcoreWeird;
