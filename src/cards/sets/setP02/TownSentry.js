"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TownSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Town Sentry", "Portal Second Age", "P02");
  }
}

module.exports = TownSentry;
