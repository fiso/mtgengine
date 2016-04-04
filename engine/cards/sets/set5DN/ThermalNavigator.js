"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThermalNavigator extends Card {
  constructor(game) {
    super(game, "Thermal Navigator", "Fifth Dawn", "5DN");
  }
}

module.exports = ThermalNavigator;
