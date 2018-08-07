"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GisasBidding extends UnimplementedCard {
  constructor (game) {
    super(game, "Gisa's Bidding", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GisasBidding;
