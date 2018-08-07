"use strict";
const Constants = require ("../../../Constants");
const SteamfloggerBossBase = require("../setUST/SteamfloggerBoss");

class SteamfloggerBoss extends SteamfloggerBossBase {
  constructor (game) {
    super(game, "Steamflogger Boss", "Future Sight", "FUT");
  }
}

module.exports = SteamfloggerBoss;
