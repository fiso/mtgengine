"use strict";
const Constants = require ("../../../Constants");
const SteamCatapultBase = require("../setME4/SteamCatapult");

class SteamCatapult extends SteamCatapultBase {
  constructor (game) {
    super(game, "Steam Catapult", "Portal Second Age", "P02");
  }
}

module.exports = SteamCatapult;
