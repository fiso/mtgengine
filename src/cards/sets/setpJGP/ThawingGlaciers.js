"use strict";
const Constants = require ("../../../Constants");
const ThawingGlaciersBase = require("../setALL/ThawingGlaciers");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor (game) {
    super(game, "Thawing Glaciers", "Judge Gift Program", "pJGP");
  }
}

module.exports = ThawingGlaciers;
