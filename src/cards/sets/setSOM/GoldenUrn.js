"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldenUrn extends UnimplementedCard {
  constructor (game) {
    super(game, "Golden Urn", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GoldenUrn;
