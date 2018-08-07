"use strict";
const Constants = require ("../../../Constants");
const WalkerofSecretWaysBase = require("../setPCA/WalkerofSecretWays");

class WalkerofSecretWays extends WalkerofSecretWaysBase {
  constructor (game) {
    super(game, "Walker of Secret Ways", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = WalkerofSecretWays;
