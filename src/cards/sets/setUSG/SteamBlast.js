"use strict";
const Constants = require ("../../../Constants");
const SteamBlastBase = require("../setBRB/SteamBlast");

class SteamBlast extends SteamBlastBase {
  constructor (game) {
    super(game, "Steam Blast", "Urza's Saga", "USG");
  }
}

module.exports = SteamBlast;
