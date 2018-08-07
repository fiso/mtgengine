"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Deflection", "Eighth Edition", "8ED");
  }
}

module.exports = Deflection;
