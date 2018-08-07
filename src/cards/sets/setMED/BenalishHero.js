"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Hero", "Masters Edition", "MED");
  }
}

module.exports = BenalishHero;
