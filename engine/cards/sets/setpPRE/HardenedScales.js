"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HardenedScalesBase = require("../setKTK/HardenedScales.js");

class HardenedScales extends HardenedScalesBase {
  constructor(game) {
    super(game, "Hardened Scales", "Prerelease Events", "pPRE");
  }
}

module.exports = HardenedScales;
