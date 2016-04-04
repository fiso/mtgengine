"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnwillingRecruit extends Card {
  constructor(game) {
    super(game, "Unwilling Recruit", "Eventide", "EVE");
  }
}

module.exports = UnwillingRecruit;
