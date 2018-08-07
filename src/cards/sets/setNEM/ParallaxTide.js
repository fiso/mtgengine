"use strict";
const Constants = require ("../../../Constants");
const ParallaxTideBase = require("../setWC00/ParallaxTide");

class ParallaxTide extends ParallaxTideBase {
  constructor (game) {
    super(game, "Parallax Tide", "Nemesis", "NEM");
  }
}

module.exports = ParallaxTide;
