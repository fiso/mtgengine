"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ComparativeAnalysis extends Card {
  constructor(game) {
    super(game, "Comparative Analysis", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ComparativeAnalysis;
