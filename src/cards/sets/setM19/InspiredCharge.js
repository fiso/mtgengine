"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiredCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspired Charge", "Core Set 2019", "M19");
  }
}

module.exports = InspiredCharge;
