"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DovinBaan extends UnimplementedCard {
  constructor (game) {
    super(game, "Dovin Baan", "Kaladesh", "KLD");
  }
}

module.exports = DovinBaan;
