"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestinPeace extends UnimplementedCard {
  constructor(game) {
    super(game, "Rest in Peace", "Return to Ravnica", "RTR");
  }
}

module.exports = RestinPeace;
