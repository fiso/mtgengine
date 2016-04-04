"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroesRemembered extends Card {
  constructor(game) {
    super(game, "Heroes Remembered", "Planar Chaos", "PLC");
  }
}

module.exports = HeroesRemembered;
