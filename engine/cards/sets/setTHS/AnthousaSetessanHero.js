"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnthousaSetessanHeroBase = require("../setpPRE/AnthousaSetessanHero.js");

class AnthousaSetessanHero extends AnthousaSetessanHeroBase {
  constructor(game) {
    super(game, "Anthousa, Setessan Hero", "Theros", "THS");
  }
}

module.exports = AnthousaSetessanHero;
