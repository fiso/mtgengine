"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionRelic extends UnimplementedCard {
  constructor (game) {
    super(game, "Coalition Relic", "Masters 25", "A25");
  }
}

module.exports = CoalitionRelic;
