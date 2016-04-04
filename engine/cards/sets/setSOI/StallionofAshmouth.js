"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StallionofAshmouth extends Card {
  constructor(game) {
    super(game, "Stallion of Ashmouth", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StallionofAshmouth;
