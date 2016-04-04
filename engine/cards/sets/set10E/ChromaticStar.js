"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChromaticStar extends Card {
  constructor(game) {
    super(game, "Chromatic Star", "Tenth Edition", "10E");
  }
}

module.exports = ChromaticStar;
