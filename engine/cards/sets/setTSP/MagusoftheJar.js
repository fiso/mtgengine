"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheJar extends Card {
  constructor(game) {
    super(game, "Magus of the Jar", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheJar;
