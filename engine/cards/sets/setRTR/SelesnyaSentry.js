"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SelesnyaSentry extends Card {
  constructor(game) {
    super(game, "Selesnya Sentry", "Return to Ravnica", "RTR");
  }
}

module.exports = SelesnyaSentry;
