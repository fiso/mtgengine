"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FerociousCharge extends UnimplementedCard {
  constructor(game) {
    super(game, "Ferocious Charge", "Fifth Dawn", "5DN");
  }
}

module.exports = FerociousCharge;
