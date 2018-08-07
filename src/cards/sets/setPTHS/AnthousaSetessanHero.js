"use strict";
const Constants = require ("../../../Constants");
const AnthousaSetessanHeroBase = require("../setTHS/AnthousaSetessanHero");

class AnthousaSetessanHero extends AnthousaSetessanHeroBase {
  constructor (game) {
    super(game, "Anthousa, Setessan Hero", "Theros Promos", "PTHS");
  }
}

module.exports = AnthousaSetessanHero;
