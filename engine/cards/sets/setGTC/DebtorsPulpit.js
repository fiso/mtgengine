"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DebtorsPulpit extends UnimplementedCard {
  constructor(game) {
    super(game, "Debtor's Pulpit", "Gatecrash", "GTC");
  }
}

module.exports = DebtorsPulpit;
