"use strict";
const Constants = require ("../../../Constants");
const StoneRainBase = require("../set9ED/StoneRain");

class StoneRain extends StoneRainBase {
  constructor (game) {
    super(game, "Stone Rain", "World Championship Decks 1999", "WC99");
  }
}

module.exports = StoneRain;
