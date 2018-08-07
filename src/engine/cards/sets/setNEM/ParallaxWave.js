"use strict";
const Constants = require ("../../../Constants");
const ParallaxWaveBase = require("../setVMA/ParallaxWave");

class ParallaxWave extends ParallaxWaveBase {
  constructor (game) {
    super(game, "Parallax Wave", "Nemesis", "NEM");
  }
}

module.exports = ParallaxWave;
