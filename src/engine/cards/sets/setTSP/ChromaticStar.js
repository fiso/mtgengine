"use strict";
const Constants = require ("../../../Constants");
const ChromaticStarBase = require("../set10E/ChromaticStar");

class ChromaticStar extends ChromaticStarBase {
  constructor (game) {
    super(game, "Chromatic Star", "Time Spiral", "TSP");
  }
}

module.exports = ChromaticStar;
