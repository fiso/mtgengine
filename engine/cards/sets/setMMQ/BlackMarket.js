"use strict";
const Constants = require ("../../../Constants");
const BlackMarketBase = require("../setC15/BlackMarket");

class BlackMarket extends BlackMarketBase {
  constructor(game) {
    super(game, "Black Market", "Mercadian Masques", "MMQ");
  }
}

module.exports = BlackMarket;
