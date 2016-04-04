"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalculatedDismissal extends UnimplementedCard {
  constructor(game) {
    super(game, "Calculated Dismissal", "Magic Origins", "ORI");
  }
}

module.exports = CalculatedDismissal;
