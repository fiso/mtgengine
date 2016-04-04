"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneRainBase = require("../setCHK/StoneRain.js");

class StoneRain extends StoneRainBase {
  constructor(game) {
    super(game, "Stone Rain", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StoneRain;
