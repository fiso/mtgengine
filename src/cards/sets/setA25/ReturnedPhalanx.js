"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReturnedPhalanx extends UnimplementedCard {
  constructor (game) {
    super(game, "Returned Phalanx", "Masters 25", "A25");
  }
}

module.exports = ReturnedPhalanx;
