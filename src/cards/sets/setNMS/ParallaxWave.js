"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallaxWave extends UnimplementedCard {
  constructor(game) {
    super(game, "Parallax Wave", "Nemesis", "NMS");
  }
}

module.exports = ParallaxWave;
