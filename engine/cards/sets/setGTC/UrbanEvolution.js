"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrbanEvolutionBase = require("../setDDO/UrbanEvolution.js");

class UrbanEvolution extends UrbanEvolutionBase {
  constructor(game) {
    super(game, "Urban Evolution", "Gatecrash", "GTC");
  }
}

module.exports = UrbanEvolution;
