"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelesnyaSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Selesnya Sentry", "Return to Ravnica", "RTR");
  }
}

module.exports = SelesnyaSentry;
