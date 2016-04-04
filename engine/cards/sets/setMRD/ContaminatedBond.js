"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContaminatedBond extends Card {
  constructor(game) {
    super(game, "Contaminated Bond", "Mirrodin", "MRD");
  }
}

module.exports = ContaminatedBond;
