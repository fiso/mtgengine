"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpedResearcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Warped Researcher", "Legions", "LGN");
  }
}

module.exports = WarpedResearcher;
