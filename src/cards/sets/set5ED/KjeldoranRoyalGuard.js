"use strict";
const Constants = require ("../../../Constants");
const KjeldoranRoyalGuardBase = require("../set6ED/KjeldoranRoyalGuard");

class KjeldoranRoyalGuard extends KjeldoranRoyalGuardBase {
  constructor (game) {
    super(game, "Kjeldoran Royal Guard", "Fifth Edition", "5ED");
  }
}

module.exports = KjeldoranRoyalGuard;
