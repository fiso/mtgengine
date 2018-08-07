"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamekinSpitfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamekin Spitfire", "Lorwyn", "LRW");
  }
}

module.exports = FlamekinSpitfire;
