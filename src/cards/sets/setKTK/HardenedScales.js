"use strict";
const Constants = require ("../../../Constants");
const HardenedScalesBase = require("../setCM2/HardenedScales");

class HardenedScales extends HardenedScalesBase {
  constructor (game) {
    super(game, "Hardened Scales", "Khans of Tarkir", "KTK");
  }
}

module.exports = HardenedScales;
