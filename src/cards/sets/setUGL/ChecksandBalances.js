"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChecksandBalances extends UnimplementedCard {
  constructor (game) {
    super(game, "Checks and Balances", "Unglued", "UGL");
  }
}

module.exports = ChecksandBalances;
