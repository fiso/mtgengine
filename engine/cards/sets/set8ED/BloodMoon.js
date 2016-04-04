"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodMoonBase = require("../setCHR/BloodMoon.js");

class BloodMoon extends BloodMoonBase {
  constructor(game) {
    super(game, "Blood Moon", "Eighth Edition", "8ED");
  }
}

module.exports = BloodMoon;
