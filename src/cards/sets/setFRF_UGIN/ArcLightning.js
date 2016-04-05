"use strict";
const Constants = require ("../../../Constants");
const ArcLightningBase = require("../setpARL/ArcLightning");

class ArcLightning extends ArcLightningBase {
  constructor(game) {
    super(game, "Arc Lightning", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = ArcLightning;
