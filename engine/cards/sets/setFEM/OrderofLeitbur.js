"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderofLeitbur extends UnimplementedCard {
  constructor(game) {
    super(game, "Order of Leitbur", "Fallen Empires", "FEM");
  }
}

module.exports = OrderofLeitbur;
