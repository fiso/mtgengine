"use strict";
const Constants = require ("../../../Constants");
const TradeSecretsBase = require("../setCMD/TradeSecrets");

class TradeSecrets extends TradeSecretsBase {
  constructor (game) {
    super(game, "Trade Secrets", "Onslaught", "ONS");
  }
}

module.exports = TradeSecrets;
