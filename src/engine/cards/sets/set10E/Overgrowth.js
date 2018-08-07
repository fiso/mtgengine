"use strict";
const Constants = require ("../../../Constants");
const OvergrowthBase = require("../setC18/Overgrowth");

class Overgrowth extends OvergrowthBase {
  constructor (game) {
    super(game, "Overgrowth", "Tenth Edition", "10E");
  }
}

module.exports = Overgrowth;
