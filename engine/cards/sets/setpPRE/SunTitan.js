"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunTitanBase = require("../setC14/SunTitan.js");

class SunTitan extends SunTitanBase {
  constructor(game) {
    super(game, "Sun Titan", "Prerelease Events", "pPRE");
  }
}

module.exports = SunTitan;
