"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TradeSecrets extends Card {
  constructor(game) {
    super(game, "Trade Secrets", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TradeSecrets;
