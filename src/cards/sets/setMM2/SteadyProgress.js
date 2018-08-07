"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadyProgress extends UnimplementedCard {
  constructor (game) {
    super(game, "Steady Progress", "Modern Masters 2015", "MM2");
  }
}

module.exports = SteadyProgress;
