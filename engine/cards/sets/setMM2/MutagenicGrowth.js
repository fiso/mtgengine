"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MutagenicGrowth extends Card {
  constructor(game) {
    super(game, "Mutagenic Growth", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MutagenicGrowth;
