"use strict";
const Constants = require ("../../../Constants");
const ArcLightningBase = require("../setpARL/ArcLightning");

class ArcLightning extends ArcLightningBase {
  constructor(game) {
    super(game, "Arc Lightning", "Planechase", "HOP");
  }
}

module.exports = ArcLightning;
