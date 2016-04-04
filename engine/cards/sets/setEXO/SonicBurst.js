"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SonicBurstBase = require("../setBTD/SonicBurst.js");

class SonicBurst extends SonicBurstBase {
  constructor(game) {
    super(game, "Sonic Burst", "Exodus", "EXO");
  }
}

module.exports = SonicBurst;
