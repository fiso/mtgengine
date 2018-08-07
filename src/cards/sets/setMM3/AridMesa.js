"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AridMesa extends UnimplementedCard {
  constructor (game) {
    super(game, "Arid Mesa", "Modern Masters 2017", "MM3");
  }
}

module.exports = AridMesa;
