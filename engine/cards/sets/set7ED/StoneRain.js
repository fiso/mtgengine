"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneRainBase = require("../setCHK/StoneRain.js");

class StoneRain extends StoneRainBase {
  constructor(game) {
    super(game, "Stone Rain", "Seventh Edition", "7ED");
  }
}

module.exports = StoneRain;
