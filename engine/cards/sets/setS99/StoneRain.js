"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneRainBase = require("../setCHK/StoneRain.js");

class StoneRain extends StoneRainBase {
  constructor(game) {
    super(game, "Stone Rain", "Starter 1999", "S99");
  }
}

module.exports = StoneRain;
