"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nighthaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Nighthaze", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Nighthaze;
