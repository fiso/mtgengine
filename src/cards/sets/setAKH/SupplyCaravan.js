"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupplyCaravan extends UnimplementedCard {
  constructor (game) {
    super(game, "Supply Caravan", "Amonkhet", "AKH");
  }
}

module.exports = SupplyCaravan;
