"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrderofLeitbur extends Card {
  constructor(game) {
    super(game, "Order of Leitbur", "Fallen Empires", "FEM");
  }
}

module.exports = OrderofLeitbur;
