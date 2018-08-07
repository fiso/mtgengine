"use strict";
const Constants = require ("../../../Constants");
const ThawingGlaciersBase = require("../setVMA/ThawingGlaciers");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor (game) {
    super(game, "Thawing Glaciers", "Masters Edition", "MED");
  }
}

module.exports = ThawingGlaciers;
