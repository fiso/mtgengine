"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StolenStrategy extends UnimplementedCard {
  constructor (game) {
    super(game, "Stolen Strategy", "Battlebond", "BBD");
  }
}

module.exports = StolenStrategy;
