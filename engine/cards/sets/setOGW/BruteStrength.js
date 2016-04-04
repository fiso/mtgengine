"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BruteStrength extends Card {
  constructor(game) {
    super(game, "Brute Strength", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BruteStrength;
