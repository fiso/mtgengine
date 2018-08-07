"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiquidFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Liquid Fire", "Odyssey", "ODY");
  }
}

module.exports = LiquidFire;
