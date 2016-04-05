"use strict";
const Constants = require ("../../../Constants");
const KjeldoranRoyalGuardBase = require("../set6ED/KjeldoranRoyalGuard");

class KjeldoranRoyalGuard extends KjeldoranRoyalGuardBase {
  constructor(game) {
    super(game, "Kjeldoran Royal Guard", "Tenth Edition", "10E");
  }
}

module.exports = KjeldoranRoyalGuard;
