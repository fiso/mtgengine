"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradeSecrets extends UnimplementedCard {
  constructor(game) {
    super(game, "Trade Secrets", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TradeSecrets;
