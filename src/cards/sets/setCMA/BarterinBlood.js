"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarterinBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Barter in Blood", "Commander Anthology", "CMA");
  }
}

module.exports = BarterinBlood;
