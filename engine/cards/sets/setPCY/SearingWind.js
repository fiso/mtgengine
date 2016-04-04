"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SearingWindBase = require("../set8ED/SearingWind.js");

class SearingWind extends SearingWindBase {
  constructor(game) {
    super(game, "Searing Wind", "Prophecy", "PCY");
  }
}

module.exports = SearingWind;
