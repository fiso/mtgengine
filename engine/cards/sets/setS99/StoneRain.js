"use strict";
const Constants = require ("../../../Constants");
const StoneRainBase = require("../setCHK/StoneRain");

class StoneRain extends StoneRainBase {
  constructor(game) {
    super(game, "Stone Rain", "Starter 1999", "S99");
  }
}

module.exports = StoneRain;
