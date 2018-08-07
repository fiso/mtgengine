"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallaxWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Parallax Wave", "Vintage Masters", "VMA");
  }
}

module.exports = ParallaxWave;
