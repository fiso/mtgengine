"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosImps extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Imps", "Return to Ravnica", "RTR");
  }
}

module.exports = ChaosImps;
