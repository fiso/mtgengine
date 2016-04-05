"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Slitherhead extends UnimplementedCard {
  constructor(game) {
    super(game, "Slitherhead", "Return to Ravnica", "RTR");
  }
}

module.exports = Slitherhead;
