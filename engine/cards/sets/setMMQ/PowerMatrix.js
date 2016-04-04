"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerMatrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Power Matrix", "Mercadian Masques", "MMQ");
  }
}

module.exports = PowerMatrix;
