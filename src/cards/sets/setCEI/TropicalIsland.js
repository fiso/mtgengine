"use strict";
const Constants = require ("../../../Constants");
const TropicalIslandBase = require("../setVMA/TropicalIsland");

class TropicalIsland extends TropicalIslandBase {
  constructor (game) {
    super(game, "Tropical Island", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = TropicalIsland;
