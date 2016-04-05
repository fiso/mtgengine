"use strict";
const Constants = require ("../../../Constants");
const SkyknightLegionnaireBase = require("../setpARL/SkyknightLegionnaire");

class SkyknightLegionnaire extends SkyknightLegionnaireBase {
  constructor(game) {
    super(game, "Skyknight Legionnaire", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SkyknightLegionnaire;
