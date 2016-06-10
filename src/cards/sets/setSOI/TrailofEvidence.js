"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrailofEvidence extends UnimplementedCard {
  constructor (game) {
    super(game, "Trail of Evidence", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TrailofEvidence;
