"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteamVentsBase = require("../setGPT/SteamVents.js");

class SteamVents extends SteamVentsBase {
  constructor(game) {
    super(game, "Steam Vents", "Zendikar Expedition", "EXP");
  }
}

module.exports = SteamVents;
