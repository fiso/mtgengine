"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SentinelTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel Tower", "Battlebond", "BBD");
  }
}

module.exports = SentinelTower;
