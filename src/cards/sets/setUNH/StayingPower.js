"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StayingPower extends UnimplementedCard {
  constructor (game) {
    super(game, "Staying Power", "Unhinged", "UNH");
  }
}

module.exports = StayingPower;
