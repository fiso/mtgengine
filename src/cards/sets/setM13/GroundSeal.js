"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroundSeal extends UnimplementedCard {
  constructor (game) {
    super(game, "Ground Seal", "Magic 2013", "M13");
  }
}

module.exports = GroundSeal;
