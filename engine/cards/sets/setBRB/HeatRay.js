"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeatRay extends UnimplementedCard {
  constructor(game) {
    super(game, "Heat Ray", "Battle Royale Box Set", "BRB");
  }
}

module.exports = HeatRay;
