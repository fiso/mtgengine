"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderofLeitbur extends UnimplementedCard {
  constructor (game) {
    super(game, "Order of Leitbur", "Masters Edition", "MED");
  }
}

module.exports = OrderofLeitbur;
