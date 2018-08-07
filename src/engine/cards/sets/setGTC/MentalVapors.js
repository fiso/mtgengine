"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MentalVapors extends UnimplementedCard {
  constructor (game) {
    super(game, "Mental Vapors", "Gatecrash", "GTC");
  }
}

module.exports = MentalVapors;
