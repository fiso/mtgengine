"use strict";
const Constants = require ("../../../Constants");
const RegrowthBase = require("../setCED/Regrowth");

class Regrowth extends RegrowthBase {
  constructor (game) {
    super(game, "Regrowth", "International Collector's Edition", "CEI");
  }
}

module.exports = Regrowth;
