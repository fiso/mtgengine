"use strict";
const Constants = require ("../../../Constants");
const WalkerofSecretWaysBase = require("../setPCA/WalkerofSecretWays");

class WalkerofSecretWays extends WalkerofSecretWaysBase {
  constructor (game) {
    super(game, "Walker of Secret Ways", "Planechase 2012", "PC2");
  }
}

module.exports = WalkerofSecretWays;
