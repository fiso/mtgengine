"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlyingMen extends UnimplementedCard {
  constructor (game) {
    super(game, "Flying Men", "Arabian Nights", "ARN");
  }
}

module.exports = FlyingMen;
