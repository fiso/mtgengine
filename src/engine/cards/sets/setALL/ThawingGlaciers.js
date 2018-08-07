"use strict";
const Constants = require ("../../../Constants");
const ThawingGlaciersBase = require("../setVMA/ThawingGlaciers");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor (game) {
    super(game, "Thawing Glaciers", "Alliances", "ALL");
  }
}

module.exports = ThawingGlaciers;
