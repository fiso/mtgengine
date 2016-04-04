"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalanceofPower extends Card {
  constructor(game) {
    super(game, "Balance of Power", "Eighth Edition", "8ED");
  }
}

module.exports = BalanceofPower;
