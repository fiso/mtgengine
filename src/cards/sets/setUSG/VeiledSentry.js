"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeiledSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Veiled Sentry", "Urza's Saga", "USG");
  }
}

module.exports = VeiledSentry;
