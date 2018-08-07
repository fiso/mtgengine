"use strict";
const Constants = require ("../../../Constants");
const TropicalIslandBase = require("../setVMA/TropicalIsland");

class TropicalIsland extends TropicalIslandBase {
  constructor (game) {
    super(game, "Tropical Island", "Collectors’ Edition", "CED");
  }
}

module.exports = TropicalIsland;
