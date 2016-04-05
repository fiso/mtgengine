"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalloftheGavel extends UnimplementedCard {
  constructor(game) {
    super(game, "Fall of the Gavel", "Return to Ravnica", "RTR");
  }
}

module.exports = FalloftheGavel;
