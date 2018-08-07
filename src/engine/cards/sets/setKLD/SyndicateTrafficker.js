"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyndicateTrafficker extends UnimplementedCard {
  constructor (game) {
    super(game, "Syndicate Trafficker", "Kaladesh", "KLD");
  }
}

module.exports = SyndicateTrafficker;
