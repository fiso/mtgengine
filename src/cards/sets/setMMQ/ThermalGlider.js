"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThermalGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Thermal Glider", "Mercadian Masques", "MMQ");
  }
}

module.exports = ThermalGlider;
