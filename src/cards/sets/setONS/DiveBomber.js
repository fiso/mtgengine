"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiveBomber extends UnimplementedCard {
  constructor (game) {
    super(game, "Dive Bomber", "Onslaught", "ONS");
  }
}

module.exports = DiveBomber;
