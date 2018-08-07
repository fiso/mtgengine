"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZursWeirding extends UnimplementedCard {
  constructor (game) {
    super(game, "Zur's Weirding", "Ninth Edition", "9ED");
  }
}

module.exports = ZursWeirding;
