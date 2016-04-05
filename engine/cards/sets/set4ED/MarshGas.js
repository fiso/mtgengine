"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshGas extends UnimplementedCard {
  constructor(game) {
    super(game, "Marsh Gas", "Fourth Edition", "4ED");
  }
}

module.exports = MarshGas;
