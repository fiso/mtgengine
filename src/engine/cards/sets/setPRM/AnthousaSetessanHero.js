"use strict";
const Constants = require ("../../../Constants");
const AnthousaSetessanHeroBase = require("../setTHS/AnthousaSetessanHero");

class AnthousaSetessanHero extends AnthousaSetessanHeroBase {
  constructor (game) {
    super(game, "Anthousa, Setessan Hero", "Magic Online Promos", "PRM");
  }
}

module.exports = AnthousaSetessanHero;
