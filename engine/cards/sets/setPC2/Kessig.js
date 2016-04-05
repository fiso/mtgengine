"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kessig extends UnimplementedCard {
  constructor(game) {
    super(game, "Kessig", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Kessig;
