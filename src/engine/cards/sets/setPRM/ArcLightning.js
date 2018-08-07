"use strict";
const Constants = require ("../../../Constants");
const ArcLightningBase = require("../setUGIN/ArcLightning");

class ArcLightning extends ArcLightningBase {
  constructor (game) {
    super(game, "Arc Lightning", "Magic Online Promos", "PRM");
  }
}

module.exports = ArcLightning;
