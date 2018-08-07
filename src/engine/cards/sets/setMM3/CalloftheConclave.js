"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalloftheConclave extends UnimplementedCard {
  constructor (game) {
    super(game, "Call of the Conclave", "Modern Masters 2017", "MM3");
  }
}

module.exports = CalloftheConclave;
