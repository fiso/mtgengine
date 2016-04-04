"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteamBlastBase = require("../setBRB/SteamBlast.js");

class SteamBlast extends SteamBlastBase {
  constructor(game) {
    super(game, "Steam Blast", "Urza's Saga", "USG");
  }
}

module.exports = SteamBlast;
