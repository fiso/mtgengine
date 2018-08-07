"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftofStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Gift of Strength", "Hour of Devastation", "HOU");
  }
}

module.exports = GiftofStrength;
