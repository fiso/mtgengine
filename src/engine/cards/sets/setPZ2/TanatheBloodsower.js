"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TanatheBloodsower extends UnimplementedCard {
  constructor (game) {
    super(game, "Tana, the Bloodsower", "You Make the Cube", "PZ2");
  }
}

module.exports = TanatheBloodsower;
