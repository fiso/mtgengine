"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallyrushBanneret extends UnimplementedCard {
  constructor (game) {
    super(game, "Ballyrush Banneret", "Morningtide", "MOR");
  }
}

module.exports = BallyrushBanneret;
