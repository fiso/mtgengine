"use strict";
const Constants = require ("../../../Constants");
const ClanDefianceBase = require("../setC16/ClanDefiance");

class ClanDefiance extends ClanDefianceBase {
  constructor (game) {
    super(game, "Clan Defiance", "Gatecrash", "GTC");
  }
}

module.exports = ClanDefiance;
