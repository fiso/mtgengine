"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PilferedPlans extends UnimplementedCard {
  constructor (game) {
    super(game, "Pilfered Plans", "Modern Masters 2017", "MM3");
  }
}

module.exports = PilferedPlans;
