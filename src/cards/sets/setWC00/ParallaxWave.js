"use strict";
const Constants = require ("../../../Constants");
const ParallaxWaveBase = require("../setVMA/ParallaxWave");

class ParallaxWave extends ParallaxWaveBase {
  constructor (game) {
    super(game, "Parallax Wave", "World Championship Decks 2000", "WC00");
  }
}

module.exports = ParallaxWave;
