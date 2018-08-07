"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fragmentize extends UnimplementedCard {
  constructor (game) {
    super(game, "Fragmentize", "Kaladesh", "KLD");
  }
}

module.exports = Fragmentize;
