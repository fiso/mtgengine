"use strict";
const Constants = require ("../../../Constants");
const SteamVentsBase = require("../setGPT/SteamVents");

class SteamVents extends SteamVentsBase {
  constructor (game) {
    super(game, "Steam Vents", "Zendikar Expedition", "EXP");
  }
}

module.exports = SteamVents;
