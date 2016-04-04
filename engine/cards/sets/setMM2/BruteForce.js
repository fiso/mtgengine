"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BruteForceBase = require("../setMMA/BruteForce.js");

class BruteForce extends BruteForceBase {
  constructor(game) {
    super(game, "Brute Force", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BruteForce;
