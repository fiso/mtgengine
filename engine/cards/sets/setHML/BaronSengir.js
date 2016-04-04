"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaronSengir extends Card {
  constructor(game) {
    super(game, "Baron Sengir", "Homelands", "HML");
  }
}

module.exports = BaronSengir;
