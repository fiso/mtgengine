"use strict";
const Constants = require ("../../../Constants");
const SteamVentsBase = require("../setEXP/SteamVents");

class SteamVents extends SteamVentsBase {
  constructor (game) {
    super(game, "Steam Vents", "Guildpact", "GPT");
  }
}

module.exports = SteamVents;
