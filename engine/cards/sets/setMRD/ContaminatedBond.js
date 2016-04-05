"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContaminatedBond extends UnimplementedCard {
  constructor(game) {
    super(game, "Contaminated Bond", "Mirrodin", "MRD");
  }
}

module.exports = ContaminatedBond;
