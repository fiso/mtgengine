"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MentalVapors extends Card {
  constructor(game) {
    super(game, "Mental Vapors", "Gatecrash", "GTC");
  }
}

module.exports = MentalVapors;
