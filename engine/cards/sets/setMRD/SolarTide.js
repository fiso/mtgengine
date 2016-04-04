"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolarTide extends UnimplementedCard {
  constructor(game) {
    super(game, "Solar Tide", "Mirrodin", "MRD");
  }
}

module.exports = SolarTide;
