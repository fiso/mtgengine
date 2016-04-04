"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SyndicateEnforcer extends Card {
  constructor(game) {
    super(game, "Syndicate Enforcer", "Gatecrash", "GTC");
  }
}

module.exports = SyndicateEnforcer;
