"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LargerThanLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Larger Than Life", "Kaladesh", "KLD");
  }
}

module.exports = LargerThanLife;
