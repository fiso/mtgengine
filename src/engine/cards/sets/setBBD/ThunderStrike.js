"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunder Strike", "Battlebond", "BBD");
  }
}

module.exports = ThunderStrike;
