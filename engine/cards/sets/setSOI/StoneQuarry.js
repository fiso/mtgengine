"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneQuarry extends UnimplementedCard {
  constructor(game) {
    super(game, "Stone Quarry", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StoneQuarry;
