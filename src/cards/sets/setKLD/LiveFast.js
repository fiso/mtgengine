"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiveFast extends UnimplementedCard {
  constructor (game) {
    super(game, "Live Fast", "Kaladesh", "KLD");
  }
}

module.exports = LiveFast;
