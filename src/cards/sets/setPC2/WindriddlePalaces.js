"use strict";
const Constants = require ("../../../Constants");
const WindriddlePalacesBase = require("../setPCA/WindriddlePalaces");

class WindriddlePalaces extends WindriddlePalacesBase {
  constructor (game) {
    super(game, "Windriddle Palaces", "Planechase 2012", "PC2");
  }
}

module.exports = WindriddlePalaces;
