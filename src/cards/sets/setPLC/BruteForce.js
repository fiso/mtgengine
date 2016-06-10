"use strict";
const Constants = require ("../../../Constants");
const BruteForceBase = require("../setMMA/BruteForce");

class BruteForce extends BruteForceBase {
  constructor (game) {
    super(game, "Brute Force", "Planar Chaos", "PLC");
  }
}

module.exports = BruteForce;
