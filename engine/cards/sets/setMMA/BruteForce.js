"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BruteForce extends Card {
  constructor(game) {
    super(game, "Brute Force", "Modern Masters", "MMA");
  }
}

module.exports = BruteForce;
