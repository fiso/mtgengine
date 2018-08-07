"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Holy Strength", "Magic 2011", "M11");
  }
}

module.exports = HolyStrength;
