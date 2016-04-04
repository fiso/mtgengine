"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenalishHeroBase = require("../setCED/BenalishHero.js");

class BenalishHero extends BenalishHeroBase {
  constructor(game) {
    super(game, "Benalish Hero", "Unlimited Edition", "2ED");
  }
}

module.exports = BenalishHero;
