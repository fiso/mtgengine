"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TradeCaravan extends Card {
  constructor(game) {
    super(game, "Trade Caravan", "Homelands", "HML");
  }
}

module.exports = TradeCaravan;
