"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThermalNavigator extends UnimplementedCard {
  constructor(game) {
    super(game, "Thermal Navigator", "Fifth Dawn", "5DN");
  }
}

module.exports = ThermalNavigator;
