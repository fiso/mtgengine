"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesmericFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesmeric Fiend", "Masters 25", "A25");
  }
}

module.exports = MesmericFiend;
