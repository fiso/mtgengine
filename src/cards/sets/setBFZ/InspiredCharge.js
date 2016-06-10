"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiredCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspired Charge", "Battle for Zendikar", "BFZ");
  }
}

module.exports = InspiredCharge;
