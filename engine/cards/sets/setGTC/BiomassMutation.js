"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BiomassMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Biomass Mutation", "Gatecrash", "GTC");
  }
}

module.exports = BiomassMutation;
