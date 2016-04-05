"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AquusSteed extends UnimplementedCard {
  constructor(game) {
    super(game, "Aquus Steed", "Return to Ravnica", "RTR");
  }
}

module.exports = AquusSteed;
