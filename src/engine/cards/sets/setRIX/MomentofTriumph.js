"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentofTriumph extends UnimplementedCard {
  constructor (game) {
    super(game, "Moment of Triumph", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MomentofTriumph;
