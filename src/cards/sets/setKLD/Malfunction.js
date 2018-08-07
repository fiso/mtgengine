"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Malfunction extends UnimplementedCard {
  constructor (game) {
    super(game, "Malfunction", "Kaladesh", "KLD");
  }
}

module.exports = Malfunction;
