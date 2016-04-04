"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AberrantResearcher extends Card {
  constructor(game) {
    super(game, "Aberrant Researcher", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AberrantResearcher;
