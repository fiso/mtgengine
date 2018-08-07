"use strict";
const Constants = require ("../../../Constants");
const ArcLightningBase = require("../setUGIN/ArcLightning");

class ArcLightning extends ArcLightningBase {
  constructor (game) {
    super(game, "Arc Lightning", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArcLightning;
