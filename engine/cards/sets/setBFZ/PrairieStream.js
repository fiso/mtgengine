"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrairieStream extends UnimplementedCard {
  constructor(game) {
    super(game, "Prairie Stream", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PrairieStream;
