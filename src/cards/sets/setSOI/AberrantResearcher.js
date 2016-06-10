"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AberrantResearcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Aberrant Researcher", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AberrantResearcher;
