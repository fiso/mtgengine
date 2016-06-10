"use strict";
const Constants = require ("../../../Constants");
const SteamVentsBase = require("../setGPT/SteamVents");

class SteamVents extends SteamVentsBase {
  constructor (game) {
    super(game, "Steam Vents", "Return to Ravnica", "RTR");
  }
}

module.exports = SteamVents;
