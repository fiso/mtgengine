"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoverBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Hover Barrier", "Return to Ravnica", "RTR");
  }
}

module.exports = HoverBarrier;
