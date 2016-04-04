"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodMoonBase = require("../setCHR/BloodMoon.js");

class BloodMoon extends BloodMoonBase {
  constructor(game) {
    super(game, "Blood Moon", "Modern Masters", "MMA");
  }
}

module.exports = BloodMoon;
