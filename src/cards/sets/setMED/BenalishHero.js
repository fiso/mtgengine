"use strict";
const Constants = require ("../../../Constants");
const BenalishHeroBase = require("../setCED/BenalishHero");

class BenalishHero extends BenalishHeroBase {
  constructor (game) {
    super(game, "Benalish Hero", "Masters Edition", "MED");
  }
}

module.exports = BenalishHero;
