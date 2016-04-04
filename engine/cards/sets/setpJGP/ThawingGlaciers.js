"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThawingGlaciersBase = require("../setALL/ThawingGlaciers.js");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor(game) {
    super(game, "Thawing Glaciers", "Judge Gift Program", "pJGP");
  }
}

module.exports = ThawingGlaciers;
