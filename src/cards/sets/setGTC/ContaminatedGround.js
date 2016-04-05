"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContaminatedGround extends UnimplementedCard {
  constructor(game) {
    super(game, "Contaminated Ground", "Gatecrash", "GTC");
  }
}

module.exports = ContaminatedGround;
