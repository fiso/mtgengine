"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BallyrushBanneret extends Card {
  constructor(game) {
    super(game, "Ballyrush Banneret", "Morningtide", "MOR");
  }
}

module.exports = BallyrushBanneret;
