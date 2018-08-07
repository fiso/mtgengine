"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AimHigh extends UnimplementedCard {
  constructor (game) {
    super(game, "Aim High", "Battlebond", "BBD");
  }
}

module.exports = AimHigh;
