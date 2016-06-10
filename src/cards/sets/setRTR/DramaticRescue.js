"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DramaticRescue extends UnimplementedCard {
  constructor (game) {
    super(game, "Dramatic Rescue", "Return to Ravnica", "RTR");
  }
}

module.exports = DramaticRescue;
