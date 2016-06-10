"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StallionofAshmouth extends UnimplementedCard {
  constructor (game) {
    super(game, "Stallion of Ashmouth", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StallionofAshmouth;
