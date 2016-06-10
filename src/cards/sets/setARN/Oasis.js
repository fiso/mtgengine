"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oasis extends UnimplementedCard {
  constructor (game) {
    super(game, "Oasis", "Arabian Nights", "ARN");
  }
}

module.exports = Oasis;
