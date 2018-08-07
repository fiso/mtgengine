"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupplyDemand extends UnimplementedCard {
  constructor (game) {
    super(game, "Supply // Demand", "Dissension", "DIS");
  }
}

module.exports = SupplyDemand;
