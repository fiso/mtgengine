"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChecksandBalances extends Card {
  constructor(game) {
    super(game, "Checks and Balances", "Unglued", "UGL");
  }
}

module.exports = ChecksandBalances;
