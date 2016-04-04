"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialCaravan extends UnimplementedCard {
  constructor(game) {
    super(game, "Aerial Caravan", "Mercadian Masques", "MMQ");
  }
}

module.exports = AerialCaravan;
