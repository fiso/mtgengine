"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParallaxWave extends Card {
  constructor(game) {
    super(game, "Parallax Wave", "Nemesis", "NMS");
  }
}

module.exports = ParallaxWave;
