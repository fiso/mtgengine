"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrasiosTritonHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrasios, Triton Hero", "You Make the Cube", "PZ2");
  }
}

module.exports = ThrasiosTritonHero;
