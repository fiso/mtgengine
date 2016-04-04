"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TradeSecretsBase = require("../setCMD/TradeSecrets.js");

class TradeSecrets extends TradeSecretsBase {
  constructor(game) {
    super(game, "Trade Secrets", "Onslaught", "ONS");
  }
}

module.exports = TradeSecrets;
