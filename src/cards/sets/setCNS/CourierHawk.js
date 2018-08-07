"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourierHawk extends UnimplementedCard {
  constructor (game) {
    super(game, "Courier Hawk", "Conspiracy", "CNS");
  }
}

module.exports = CourierHawk;
