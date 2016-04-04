"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlinkingSpiritBase = require("../setBRB/BlinkingSpirit.js");

class BlinkingSpirit extends BlinkingSpiritBase {
  constructor(game) {
    super(game, "Blinking Spirit", "Ice Age", "ICE");
  }
}

module.exports = BlinkingSpirit;
