"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeatStroke extends Card {
  constructor(game) {
    super(game, "Heat Stroke", "Weatherlight", "WTH");
  }
}

module.exports = HeatStroke;
