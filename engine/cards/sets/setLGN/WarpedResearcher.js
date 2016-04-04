"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarpedResearcher extends Card {
  constructor(game) {
    super(game, "Warped Researcher", "Legions", "LGN");
  }
}

module.exports = WarpedResearcher;
