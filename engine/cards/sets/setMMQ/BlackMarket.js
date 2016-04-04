"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackMarketBase = require("../setC15/BlackMarket.js");

class BlackMarket extends BlackMarketBase {
  constructor(game) {
    super(game, "Black Market", "Mercadian Masques", "MMQ");
  }
}

module.exports = BlackMarket;
