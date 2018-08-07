"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakeDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Take Down", "Kaladesh", "KLD");
  }
}

module.exports = TakeDown;
