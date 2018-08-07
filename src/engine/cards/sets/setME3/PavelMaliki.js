"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PavelMaliki extends UnimplementedCard {
  constructor (game) {
    super(game, "Pavel Maliki", "Masters Edition III", "ME3");
  }
}

module.exports = PavelMaliki;
