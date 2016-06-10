"use strict";
const Constants = require ("../../../Constants");
const TropicalIslandBase = require("../setCED/TropicalIsland");

class TropicalIsland extends TropicalIslandBase {
  constructor (game) {
    super(game, "Tropical Island", "International Collector's Edition", "CEI");
  }
}

module.exports = TropicalIsland;
