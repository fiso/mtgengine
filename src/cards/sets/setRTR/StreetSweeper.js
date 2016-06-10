"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreetSweeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Street Sweeper", "Return to Ravnica", "RTR");
  }
}

module.exports = StreetSweeper;
