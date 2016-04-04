"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FatedInterventionBase = require("../setBNG/FatedIntervention.js");

class FatedIntervention extends FatedInterventionBase {
  constructor(game) {
    super(game, "Fated Intervention", "Clash Pack", "CPK");
  }
}

module.exports = FatedIntervention;
