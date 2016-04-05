"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deflection extends UnimplementedCard {
  constructor(game) {
    super(game, "Deflection", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Deflection;
