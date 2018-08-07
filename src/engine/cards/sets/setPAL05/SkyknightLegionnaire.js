"use strict";
const Constants = require ("../../../Constants");
const SkyknightLegionnaireBase = require("../setMM3/SkyknightLegionnaire");

class SkyknightLegionnaire extends SkyknightLegionnaireBase {
  constructor (game) {
    super(game, "Skyknight Legionnaire", "Arena League 2005", "PAL05");
  }
}

module.exports = SkyknightLegionnaire;
