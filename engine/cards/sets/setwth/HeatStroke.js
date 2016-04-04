"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeatStroke extends UnimplementedCard {
  constructor(game) {
    super(game, "Heat Stroke", "Weatherlight", "WTH");
  }
}

module.exports = HeatStroke;
