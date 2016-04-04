"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DebtofLoyalty extends UnimplementedCard {
  constructor(game) {
    super(game, "Debt of Loyalty", "Weatherlight", "WTH");
  }
}

module.exports = DebtofLoyalty;
