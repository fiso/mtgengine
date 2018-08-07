"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BruteForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Brute Force", "Modern Masters 2015", "MM2");
  }
}

module.exports = BruteForce;
