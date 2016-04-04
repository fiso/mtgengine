"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThawingGlaciersBase = require("../setALL/ThawingGlaciers.js");

class ThawingGlaciers extends ThawingGlaciersBase {
  constructor(game) {
    super(game, "Thawing Glaciers", "Masters Edition", "MED");
  }
}

module.exports = ThawingGlaciers;
