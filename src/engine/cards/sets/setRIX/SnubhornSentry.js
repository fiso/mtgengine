"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnubhornSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Snubhorn Sentry", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SnubhornSentry;
