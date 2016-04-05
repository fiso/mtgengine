"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunderingTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Sundering Titan", "Archenemy", "ARC");
  }
}

module.exports = SunderingTitan;
