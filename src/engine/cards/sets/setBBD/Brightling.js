"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brightling extends UnimplementedCard {
  constructor (game) {
    super(game, "Brightling", "Battlebond", "BBD");
  }
}

module.exports = Brightling;
