"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameLash extends UnimplementedCard {
  constructor (game) {
    super(game, "Flame Lash", "Kaladesh", "KLD");
  }
}

module.exports = FlameLash;
