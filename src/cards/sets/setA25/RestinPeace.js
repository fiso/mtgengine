"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestinPeace extends UnimplementedCard {
  constructor (game) {
    super(game, "Rest in Peace", "Masters 25", "A25");
  }
}

module.exports = RestinPeace;
