"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarefulConsideration extends UnimplementedCard {
  constructor(game) {
    super(game, "Careful Consideration", "Modern Masters", "MMA");
  }
}

module.exports = CarefulConsideration;
