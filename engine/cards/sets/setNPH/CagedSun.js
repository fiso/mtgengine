"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CagedSunBase = require("../setC14/CagedSun.js");

class CagedSun extends CagedSunBase {
  constructor(game) {
    super(game, "Caged Sun", "New Phyrexia", "NPH");
  }
}

module.exports = CagedSun;
