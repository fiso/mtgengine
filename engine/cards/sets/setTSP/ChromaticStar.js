"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChromaticStarBase = require("../set10E/ChromaticStar.js");

class ChromaticStar extends ChromaticStarBase {
  constructor(game) {
    super(game, "Chromatic Star", "Time Spiral", "TSP");
  }
}

module.exports = ChromaticStar;
