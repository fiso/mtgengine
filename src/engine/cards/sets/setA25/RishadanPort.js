"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RishadanPort extends UnimplementedCard {
  constructor (game) {
    super(game, "Rishadan Port", "Masters 25", "A25");
  }
}

module.exports = RishadanPort;
