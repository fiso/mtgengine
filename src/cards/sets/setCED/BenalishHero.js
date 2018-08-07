"use strict";
const Constants = require ("../../../Constants");
const BenalishHeroBase = require("../setMED/BenalishHero");

class BenalishHero extends BenalishHeroBase {
  constructor (game) {
    super(game, "Benalish Hero", "Collectors’ Edition", "CED");
  }
}

module.exports = BenalishHero;
