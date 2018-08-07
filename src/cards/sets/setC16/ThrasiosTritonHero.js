"use strict";
const Constants = require ("../../../Constants");
const ThrasiosTritonHeroBase = require("../setPZ2/ThrasiosTritonHero");

class ThrasiosTritonHero extends ThrasiosTritonHeroBase {
  constructor (game) {
    super(game, "Thrasios, Triton Hero", "Commander 2016", "C16");
  }
}

module.exports = ThrasiosTritonHero;
