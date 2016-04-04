"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GracebladeArtisan extends Card {
  constructor(game) {
    super(game, "Graceblade Artisan", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GracebladeArtisan;
