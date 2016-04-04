"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DebtorsPulpit extends Card {
  constructor(game) {
    super(game, "Debtor's Pulpit", "Gatecrash", "GTC");
  }
}

module.exports = DebtorsPulpit;
