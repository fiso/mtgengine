"use strict";
const Constants = require ("../../../Constants");
const BloodMoonBase = require("../setA25/BloodMoon");

class BloodMoon extends BloodMoonBase {
  constructor (game) {
    super(game, "Blood Moon", "The Dark", "DRK");
  }
}

module.exports = BloodMoon;
