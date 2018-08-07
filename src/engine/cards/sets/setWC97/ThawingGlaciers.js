"use strict";
const Constants = require ("../../../Constants");
const ThawingGlaciersBase = require("../setVMA/ThawingGlaciers");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor (game) {
    super(game, "Thawing Glaciers", "World Championship Decks 1997", "WC97");
  }
}

module.exports = ThawingGlaciers;
