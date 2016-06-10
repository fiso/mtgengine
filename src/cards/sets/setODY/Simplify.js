"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Simplify extends UnimplementedCard {
  constructor (game) {
    super(game, "Simplify", "Odyssey", "ODY");
  }
}

module.exports = Simplify;
