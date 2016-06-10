"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Seal of Strength", "Nemesis", "NMS");
  }
}

module.exports = SealofStrength;
