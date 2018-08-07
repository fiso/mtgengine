"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WheelofFortune extends UnimplementedCard {
  constructor (game) {
    super(game, "Wheel of Fortune", "Vintage Masters", "VMA");
  }
}

module.exports = WheelofFortune;
