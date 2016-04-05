"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MutagenicGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Mutagenic Growth", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MutagenicGrowth;
