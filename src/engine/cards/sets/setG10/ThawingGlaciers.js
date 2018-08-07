"use strict";
const Constants = require ("../../../Constants");
const ThawingGlaciersBase = require("../setVMA/ThawingGlaciers");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor (game) {
    super(game, "Thawing Glaciers", "Judge Gift Cards 2010", "G10");
  }
}

module.exports = ThawingGlaciers;
