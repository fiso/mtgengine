"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InactionInjunction extends UnimplementedCard {
  constructor (game) {
    super(game, "Inaction Injunction", "Return to Ravnica", "RTR");
  }
}

module.exports = InactionInjunction;
