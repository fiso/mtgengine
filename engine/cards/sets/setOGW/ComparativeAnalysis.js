"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ComparativeAnalysis extends UnimplementedCard {
  constructor(game) {
    super(game, "Comparative Analysis", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ComparativeAnalysis;
