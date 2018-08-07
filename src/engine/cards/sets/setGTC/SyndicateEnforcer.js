"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyndicateEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Syndicate Enforcer", "Gatecrash", "GTC");
  }
}

module.exports = SyndicateEnforcer;
