"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KjeldoranRoyalGuardBase = require("../set6ED/KjeldoranRoyalGuard.js");

class KjeldoranRoyalGuard extends KjeldoranRoyalGuardBase {
  constructor(game) {
    super(game, "Kjeldoran Royal Guard", "Seventh Edition", "7ED");
  }
}

module.exports = KjeldoranRoyalGuard;
