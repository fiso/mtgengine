"use strict";
const Constants = require ("../../../Constants");
const SkyknightLegionnaireBase = require("../setMM3/SkyknightLegionnaire");

class SkyknightLegionnaire extends SkyknightLegionnaireBase {
  constructor (game) {
    super(game, "Skyknight Legionnaire", "Gatecrash", "GTC");
  }
}

module.exports = SkyknightLegionnaire;
