"use strict";
const Constants = require ("../../../Constants");
const HardenedScalesBase = require("../setKTK/HardenedScales");

class HardenedScales extends HardenedScalesBase {
  constructor (game) {
    super(game, "Hardened Scales", "Prerelease Events", "pPRE");
  }
}

module.exports = HardenedScales;
