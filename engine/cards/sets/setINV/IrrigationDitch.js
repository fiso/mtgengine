"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IrrigationDitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Irrigation Ditch", "Invasion", "INV");
  }
}

module.exports = IrrigationDitch;
