"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrivingRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Thriving Rats", "Kaladesh", "KLD");
  }
}

module.exports = ThrivingRats;
