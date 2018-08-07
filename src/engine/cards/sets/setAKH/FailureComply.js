"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FailureComply extends UnimplementedCard {
  constructor (game) {
    super(game, "Failure // Comply", "Amonkhet", "AKH");
  }
}

module.exports = FailureComply;
