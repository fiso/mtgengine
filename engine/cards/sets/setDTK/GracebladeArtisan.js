"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GracebladeArtisan extends UnimplementedCard {
  constructor(game) {
    super(game, "Graceblade Artisan", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GracebladeArtisan;
