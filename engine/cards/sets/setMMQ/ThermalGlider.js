"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThermalGlider extends Card {
  constructor(game) {
    super(game, "Thermal Glider", "Mercadian Masques", "MMQ");
  }
}

module.exports = ThermalGlider;
