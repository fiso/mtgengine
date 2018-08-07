"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmolatingGlare extends UnimplementedCard {
  constructor (game) {
    super(game, "Immolating Glare", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ImmolatingGlare;
