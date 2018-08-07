"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnwillingRecruit extends UnimplementedCard {
  constructor (game) {
    super(game, "Unwilling Recruit", "Eventide", "EVE");
  }
}

module.exports = UnwillingRecruit;
