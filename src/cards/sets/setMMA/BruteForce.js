"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BruteForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Brute Force", "Modern Masters", "MMA");
  }
}

module.exports = BruteForce;
