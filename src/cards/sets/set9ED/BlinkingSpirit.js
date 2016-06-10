"use strict";
const Constants = require ("../../../Constants");
const BlinkingSpiritBase = require("../setBRB/BlinkingSpirit");

class BlinkingSpirit extends BlinkingSpiritBase {
  constructor (game) {
    super(game, "Blinking Spirit", "Ninth Edition", "9ED");
  }
}

module.exports = BlinkingSpirit;
