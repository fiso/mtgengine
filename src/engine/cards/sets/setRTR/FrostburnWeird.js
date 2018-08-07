"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostburnWeird extends UnimplementedCard {
  constructor (game) {
    super(game, "Frostburn Weird", "Return to Ravnica", "RTR");
  }
}

module.exports = FrostburnWeird;
