"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcLightningBase = require("../setpARL/ArcLightning.js");

class ArcLightning extends ArcLightningBase {
  constructor(game) {
    super(game, "Arc Lightning", "Urza's Saga", "USG");
  }
}

module.exports = ArcLightning;
