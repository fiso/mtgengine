"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AppetiteforBrains extends UnimplementedCard {
  constructor (game) {
    super(game, "Appetite for Brains", "Avacyn Restored", "AVR");
  }
}

module.exports = AppetiteforBrains;
