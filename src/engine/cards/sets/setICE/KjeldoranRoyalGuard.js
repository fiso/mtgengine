"use strict";
const Constants = require ("../../../Constants");
const KjeldoranRoyalGuardBase = require("../set10E/KjeldoranRoyalGuard");

class KjeldoranRoyalGuard extends KjeldoranRoyalGuardBase {
  constructor (game) {
    super(game, "Kjeldoran Royal Guard", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranRoyalGuard;
