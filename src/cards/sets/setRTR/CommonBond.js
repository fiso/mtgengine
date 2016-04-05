"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommonBond extends UnimplementedCard {
  constructor(game) {
    super(game, "Common Bond", "Return to Ravnica", "RTR");
  }
}

module.exports = CommonBond;
