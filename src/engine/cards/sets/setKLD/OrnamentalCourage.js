"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrnamentalCourage extends UnimplementedCard {
  constructor (game) {
    super(game, "Ornamental Courage", "Kaladesh", "KLD");
  }
}

module.exports = OrnamentalCourage;
