"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TownSentry extends Card {
  constructor(game) {
    super(game, "Town Sentry", "Portal Second Age", "PO2");
  }
}

module.exports = TownSentry;
