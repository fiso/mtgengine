"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalIteration extends UnimplementedCard {
  constructor (game) {
    super(game, "Final Iteration", "Eldritch Moon", "EMN");
  }
}

module.exports = FinalIteration;
