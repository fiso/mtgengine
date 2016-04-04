"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimensionalInfiltrator extends Card {
  constructor(game) {
    super(game, "Dimensional Infiltrator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DimensionalInfiltrator;
