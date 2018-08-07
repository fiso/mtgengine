"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TradeSecrets extends UnimplementedCard {
  constructor (game) {
    super(game, "Trade Secrets", "Commander 2011", "CMD");
  }
}

module.exports = TradeSecrets;
