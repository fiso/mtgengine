"use strict";
const Constants = require ("../../../Constants");
const StoneRainBase = require("../setCHK/StoneRain");

class StoneRain extends StoneRainBase {
  constructor (game) {
    super(game, "Stone Rain", "Portal Second Age", "PO2");
  }
}

module.exports = StoneRain;
