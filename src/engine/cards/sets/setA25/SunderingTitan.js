"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunderingTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Sundering Titan", "Masters 25", "A25");
  }
}

module.exports = SunderingTitan;
