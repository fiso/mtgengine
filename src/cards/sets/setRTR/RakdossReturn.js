"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdossReturn extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos's Return", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdossReturn;
