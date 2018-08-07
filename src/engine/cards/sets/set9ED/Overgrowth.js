"use strict";
const Constants = require ("../../../Constants");
const OvergrowthBase = require("../setC18/Overgrowth");

class Overgrowth extends OvergrowthBase {
  constructor (game) {
    super(game, "Overgrowth", "Ninth Edition", "9ED");
  }
}

module.exports = Overgrowth;
