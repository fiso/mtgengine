"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeralfsMasterpiece extends Card {
  constructor(game) {
    super(game, "Geralf's Masterpiece", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GeralfsMasterpiece;
