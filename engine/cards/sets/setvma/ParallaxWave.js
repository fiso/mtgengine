"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ParallaxWaveBase = require("../setNMS/ParallaxWave.js");

class ParallaxWave extends ParallaxWaveBase {
  constructor(game) {
    super(game, "Parallax Wave", "Vintage Masters", "VMA");
  }
}

module.exports = ParallaxWave;
