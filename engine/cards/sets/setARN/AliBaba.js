"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AliBaba extends UnimplementedCard {
  constructor(game) {
    super(game, "Ali Baba", "Arabian Nights", "ARN");
  }
}

module.exports = AliBaba;
