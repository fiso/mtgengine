"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishSquattersBase = require("../set5ED/OrcishSquatters.js");

class OrcishSquatters extends OrcishSquattersBase {
  constructor(game) {
    super(game, "Orcish Squatters", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishSquatters;
