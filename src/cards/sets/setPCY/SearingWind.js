"use strict";
const Constants = require ("../../../Constants");
const SearingWindBase = require("../set8ED/SearingWind");

class SearingWind extends SearingWindBase {
  constructor(game) {
    super(game, "Searing Wind", "Prophecy", "PCY");
  }
}

module.exports = SearingWind;
