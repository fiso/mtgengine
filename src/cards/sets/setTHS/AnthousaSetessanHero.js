"use strict";
const Constants = require ("../../../Constants");
const AnthousaSetessanHeroBase = require("../setpPRE/AnthousaSetessanHero");

class AnthousaSetessanHero extends AnthousaSetessanHeroBase {
  constructor (game) {
    super(game, "Anthousa, Setessan Hero", "Theros", "THS");
  }
}

module.exports = AnthousaSetessanHero;
