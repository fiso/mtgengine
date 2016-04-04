"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalanceBase = require("../setCED/Balance.js");

class Balance extends BalanceBase {
  constructor(game) {
    super(game, "Balance", "Fourth Edition", "4ED");
  }
}

module.exports = Balance;
