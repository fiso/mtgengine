"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DebtofLoyalty extends Card {
  constructor(game) {
    super(game, "Debt of Loyalty", "Weatherlight", "WTH");
  }
}

module.exports = DebtofLoyalty;
