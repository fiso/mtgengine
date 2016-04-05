"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BruteStrength extends UnimplementedCard {
  constructor(game) {
    super(game, "Brute Strength", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BruteStrength;
