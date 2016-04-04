"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroesRemembered extends UnimplementedCard {
  constructor(game) {
    super(game, "Heroes Remembered", "Planar Chaos", "PLC");
  }
}

module.exports = HeroesRemembered;
