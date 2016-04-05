"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishHero extends UnimplementedCard {
  constructor(game) {
    super(game, "Benalish Hero", "Collector's Edition", "CED");
  }
}

module.exports = BenalishHero;
