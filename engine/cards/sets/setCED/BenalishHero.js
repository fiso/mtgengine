"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishHero extends Card {
  constructor(game) {
    super(game, "Benalish Hero", "Collector's Edition", "CED");
  }
}

module.exports = BenalishHero;
