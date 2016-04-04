"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZursWeirding extends UnimplementedCard {
  constructor(game) {
    super(game, "Zur's Weirding", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ZursWeirding;
