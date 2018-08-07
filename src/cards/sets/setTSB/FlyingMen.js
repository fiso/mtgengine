"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlyingMen extends UnimplementedCard {
  constructor (game) {
    super(game, "Flying Men", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = FlyingMen;
