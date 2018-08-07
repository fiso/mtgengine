"use strict";
const Constants = require ("../../../Constants");
const SteamcoreWeirdBase = require("../setDDJ/SteamcoreWeird");

class SteamcoreWeird extends SteamcoreWeirdBase {
  constructor (game) {
    super(game, "Steamcore Weird", "Guildpact", "GPT");
  }
}

module.exports = SteamcoreWeird;
