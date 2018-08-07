"use strict";
const Constants = require ("../../../Constants");
const BruteForceBase = require("../setMM2/BruteForce");

class BruteForce extends BruteForceBase {
  constructor (game) {
    super(game, "Brute Force", "Modern Masters", "MMA");
  }
}

module.exports = BruteForce;
