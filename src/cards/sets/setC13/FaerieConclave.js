"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieConclave extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Conclave", "Commander 2013 Edition", "C13");
  }
}

module.exports = FaerieConclave;
