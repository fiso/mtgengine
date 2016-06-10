"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiringCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspiring Call", "Dragons of Tarkir", "DTK");
  }
}

module.exports = InspiringCall;
