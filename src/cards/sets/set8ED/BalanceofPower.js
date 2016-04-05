"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalanceofPower extends UnimplementedCard {
  constructor(game) {
    super(game, "Balance of Power", "Eighth Edition", "8ED");
  }
}

module.exports = BalanceofPower;
