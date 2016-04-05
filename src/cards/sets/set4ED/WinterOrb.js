"use strict";
const Constants = require ("../../../Constants");
const WinterOrbBase = require("../setCED/WinterOrb");

class WinterOrb extends WinterOrbBase {
  constructor(game) {
    super(game, "Winter Orb", "Fourth Edition", "4ED");
  }
}

module.exports = WinterOrb;
