"use strict";
const Constants = require ("../../../Constants");
const BloodMoonBase = require("../setA25/BloodMoon");

class BloodMoon extends BloodMoonBase {
  constructor (game) {
    super(game, "Blood Moon", "Modern Masters 2017", "MM3");
  }
}

module.exports = BloodMoon;
