"use strict";
const Constants = require ("../../../Constants");
const KjeldoranRoyalGuardBase = require("../set6ED/KjeldoranRoyalGuard");

class KjeldoranRoyalGuard extends KjeldoranRoyalGuardBase {
  constructor (game) {
    super(game, "Kjeldoran Royal Guard", "Seventh Edition", "7ED");
  }
}

module.exports = KjeldoranRoyalGuard;
