"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampingMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Damping Matrix", "Modern Masters 2017", "MM3");
  }
}

module.exports = DampingMatrix;
