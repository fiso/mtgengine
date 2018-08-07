"use strict";
const Constants = require ("../../../Constants");
const BlinkingSpiritBase = require("../set9ED/BlinkingSpirit");

class BlinkingSpirit extends BlinkingSpiritBase {
  constructor (game) {
    super(game, "Blinking Spirit", "Ice Age", "ICE");
  }
}

module.exports = BlinkingSpirit;
