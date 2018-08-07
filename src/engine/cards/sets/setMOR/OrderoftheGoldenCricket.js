"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderoftheGoldenCricket extends UnimplementedCard {
  constructor (game) {
    super(game, "Order of the Golden Cricket", "Morningtide", "MOR");
  }
}

module.exports = OrderoftheGoldenCricket;
