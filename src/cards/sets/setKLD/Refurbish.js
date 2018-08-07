"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Refurbish extends UnimplementedCard {
  constructor (game) {
    super(game, "Refurbish", "Kaladesh", "KLD");
  }
}

module.exports = Refurbish;
