"use strict";
const Constants = require ("../../../Constants");
const BloodMoonBase = require("../setCHR/BloodMoon");

class BloodMoon extends BloodMoonBase {
  constructor (game) {
    super(game, "Blood Moon", "Modern Masters", "MMA");
  }
}

module.exports = BloodMoon;
