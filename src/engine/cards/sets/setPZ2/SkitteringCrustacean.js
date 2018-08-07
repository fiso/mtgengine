"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkitteringCrustacean extends UnimplementedCard {
  constructor (game) {
    super(game, "Skittering Crustacean", "You Make the Cube", "PZ2");
  }
}

module.exports = SkitteringCrustacean;
