"use strict";
const Constants = require ("../../../Constants");
const StoneRainBase = require("../set9ED/StoneRain");

class StoneRain extends StoneRainBase {
  constructor (game) {
    super(game, "Stone Rain", "Magic Online Promos", "PRM");
  }
}

module.exports = StoneRain;
