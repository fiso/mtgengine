"use strict";
const Constants = require ("../../../Constants");
const BlackMarketBase = require("../setC17/BlackMarket");

class BlackMarket extends BlackMarketBase {
  constructor (game) {
    super(game, "Black Market", "Mercadian Masques", "MMQ");
  }
}

module.exports = BlackMarket;
