"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheConclave extends UnimplementedCard {
  constructor (game) {
    super(game, "Call of the Conclave", "Friday Night Magic", "pFNM");
  }
}

module.exports = CalloftheConclave;
