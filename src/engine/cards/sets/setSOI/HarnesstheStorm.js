"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarnesstheStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Harness the Storm", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HarnesstheStorm;
