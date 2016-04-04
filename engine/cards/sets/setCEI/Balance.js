"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalanceBase = require("../setCED/Balance.js");

class Balance extends BalanceBase {
  constructor(game) {
    super(game, "Balance", "International Collector's Edition", "CEI");
  }
}

module.exports = Balance;
