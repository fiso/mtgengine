"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForkedLightningBase = require("../setME3/ForkedLightning.js");

class ForkedLightning extends ForkedLightningBase {
  constructor(game) {
    super(game, "Forked Lightning", "Portal", "POR");
  }
}

module.exports = ForkedLightning;
