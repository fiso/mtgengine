"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZuranOrbBase = require("../setV10/ZuranOrb.js");

class ZuranOrb extends ZuranOrbBase {
  constructor(game) {
    super(game, "Zuran Orb", "Ice Age", "ICE");
  }
}

module.exports = ZuranOrb;
