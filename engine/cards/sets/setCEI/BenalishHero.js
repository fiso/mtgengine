"use strict";
const Constants = require ("../../../Constants");
const BenalishHeroBase = require("../setCED/BenalishHero");

class BenalishHero extends BenalishHeroBase {
  constructor(game) {
    super(game, "Benalish Hero", "International Collector's Edition", "CEI");
  }
}

module.exports = BenalishHero;
