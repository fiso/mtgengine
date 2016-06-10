"use strict";
const Constants = require ("../../../Constants");
const BenalishHeroBase = require("../setCED/BenalishHero");

class BenalishHero extends BenalishHeroBase {
  constructor (game) {
    super(game, "Benalish Hero", "Unlimited Edition", "2ED");
  }
}

module.exports = BenalishHero;
