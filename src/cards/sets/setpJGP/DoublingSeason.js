"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoublingSeason extends UnimplementedCard {
  constructor (game) {
    super(game, "Doubling Season", "Judge Gift Program", "pJGP");
  }
}

module.exports = DoublingSeason;
