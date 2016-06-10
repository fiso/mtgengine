"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TownSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Town Sentry", "Portal Second Age", "PO2");
  }
}

module.exports = TownSentry;
