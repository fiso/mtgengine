"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenConcentration extends UnimplementedCard {
  constructor(game) {
    super(game, "Broken Concentration", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BrokenConcentration;
