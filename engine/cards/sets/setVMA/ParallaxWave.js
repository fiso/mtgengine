"use strict";
const Constants = require ("../../../Constants");
const ParallaxWaveBase = require("../setNMS/ParallaxWave");

class ParallaxWave extends ParallaxWaveBase {
  constructor(game) {
    super(game, "Parallax Wave", "Vintage Masters", "VMA");
  }
}

module.exports = ParallaxWave;
