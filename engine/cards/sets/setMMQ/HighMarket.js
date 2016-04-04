"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HighMarketBase = require("../setC15/HighMarket.js");

class HighMarket extends HighMarketBase {
  constructor(game) {
    super(game, "High Market", "Mercadian Masques", "MMQ");
  }
}

module.exports = HighMarket;
