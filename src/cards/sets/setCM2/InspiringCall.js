"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiringCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspiring Call", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = InspiringCall;
