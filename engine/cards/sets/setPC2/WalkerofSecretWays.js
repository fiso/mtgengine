"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WalkerofSecretWaysBase = require("../setBOK/WalkerofSecretWays.js");

class WalkerofSecretWays extends WalkerofSecretWaysBase {
  constructor(game) {
    super(game, "Walker of Secret Ways", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = WalkerofSecretWays;
