"use strict";
const Constants = require ("../../../Constants");
const ForkedLightningBase = require("../setME3/ForkedLightning");

class ForkedLightning extends ForkedLightningBase {
  constructor (game) {
    super(game, "Forked Lightning", "Portal", "POR");
  }
}

module.exports = ForkedLightning;
