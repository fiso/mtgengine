"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccumulatedKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Accumulated Knowledge", "Masters 25", "A25");
  }
}

module.exports = AccumulatedKnowledge;
