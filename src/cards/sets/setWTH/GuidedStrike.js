"use strict";
const Constants = require ("../../../Constants");
const GuidedStrikeBase = require("../setJUD/GuidedStrike");

class GuidedStrike extends GuidedStrikeBase {
  constructor(game) {
    super(game, "Guided Strike", "Weatherlight", "WTH");
  }
}

module.exports = GuidedStrike;
