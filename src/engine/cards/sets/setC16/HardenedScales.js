"use strict";
const Constants = require ("../../../Constants");
const HardenedScalesBase = require("../setCM2/HardenedScales");

class HardenedScales extends HardenedScalesBase {
  constructor (game) {
    super(game, "Hardened Scales", "Commander 2016", "C16");
  }
}

module.exports = HardenedScales;
