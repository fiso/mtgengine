"use strict";
const Constants = require ("../../../Constants");
const SteamAuguryBase = require("../setC15/SteamAugury");

class SteamAugury extends SteamAuguryBase {
  constructor (game) {
    super(game, "Steam Augury", "Theros", "THS");
  }
}

module.exports = SteamAugury;
