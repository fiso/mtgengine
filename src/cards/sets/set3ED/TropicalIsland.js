"use strict";
const Constants = require ("../../../Constants");
const TropicalIslandBase = require("../setCED/TropicalIsland");

class TropicalIsland extends TropicalIslandBase {
  constructor(game) {
    super(game, "Tropical Island", "Revised Edition", "3ED");
  }
}

module.exports = TropicalIsland;
