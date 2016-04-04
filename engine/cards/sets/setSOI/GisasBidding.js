"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GisasBidding extends Card {
  constructor(game) {
    super(game, "Gisa's Bidding", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GisasBidding;
