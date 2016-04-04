"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlamekinSpitfire extends Card {
  constructor(game) {
    super(game, "Flamekin Spitfire", "Lorwyn", "LRW");
  }
}

module.exports = FlamekinSpitfire;
