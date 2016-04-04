"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteamCatapultBase = require("../setME4/SteamCatapult.js");

class SteamCatapult extends SteamCatapultBase {
  constructor(game) {
    super(game, "Steam Catapult", "Portal Second Age", "PO2");
  }
}

module.exports = SteamCatapult;
