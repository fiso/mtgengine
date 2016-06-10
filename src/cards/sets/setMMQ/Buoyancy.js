"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Buoyancy extends UnimplementedCard {
  constructor (game) {
    super(game, "Buoyancy", "Mercadian Masques", "MMQ");
  }
}

module.exports = Buoyancy;
