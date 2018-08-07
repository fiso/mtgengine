"use strict";
const Constants = require ("../../../Constants");
const SplatterThugBase = require("../setIMA/SplatterThug");

class SplatterThug extends SplatterThugBase {
  constructor (game) {
    super(game, "Splatter Thug", "Return to Ravnica", "RTR");
  }
}

module.exports = SplatterThug;
