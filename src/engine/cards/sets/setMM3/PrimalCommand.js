"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Command", "Modern Masters 2017", "MM3");
  }
}

module.exports = PrimalCommand;
