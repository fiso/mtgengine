"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourierHawk extends UnimplementedCard {
  constructor (game) {
    super(game, "Courier Hawk", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CourierHawk;
