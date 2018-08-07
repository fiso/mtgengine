"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterGood extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Good", "Battlebond", "BBD");
  }
}

module.exports = GreaterGood;
