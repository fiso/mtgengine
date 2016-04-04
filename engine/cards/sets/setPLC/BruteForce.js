"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BruteForceBase = require("../setMMA/BruteForce.js");

class BruteForce extends BruteForceBase {
  constructor(game) {
    super(game, "Brute Force", "Planar Chaos", "PLC");
  }
}

module.exports = BruteForce;
