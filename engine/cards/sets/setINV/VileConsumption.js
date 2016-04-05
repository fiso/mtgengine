"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VileConsumption extends UnimplementedCard {
  constructor(game) {
    super(game, "Vile Consumption", "Invasion", "INV");
  }
}

module.exports = VileConsumption;
