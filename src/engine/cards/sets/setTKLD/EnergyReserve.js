"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyReserve extends UnimplementedCard {
  constructor (game) {
    super(game, "Energy Reserve", "Kaladesh Tokens", "TKLD");
  }
}

module.exports = EnergyReserve;
