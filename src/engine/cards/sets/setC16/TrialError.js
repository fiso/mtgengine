"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrialError extends UnimplementedCard {
  constructor (game) {
    super(game, "Trial // Error", "Commander 2016", "C16");
  }
}

module.exports = TrialError;
