"use strict";
const Constants = require ("../../../Constants");
const ArcLightningBase = require("../setUGIN/ArcLightning");

class ArcLightning extends ArcLightningBase {
  constructor (game) {
    super(game, "Arc Lightning", "Arena League 2002", "PAL02");
  }
}

module.exports = ArcLightning;
