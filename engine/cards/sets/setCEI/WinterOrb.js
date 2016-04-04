"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WinterOrbBase = require("../setCED/WinterOrb.js");

class WinterOrb extends WinterOrbBase {
  constructor(game) {
    super(game, "Winter Orb", "International Collector's Edition", "CEI");
  }
}

module.exports = WinterOrb;
