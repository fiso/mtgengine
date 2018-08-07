"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneThrowingDevils extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone-Throwing Devils", "Arabian Nights", "ARN");
  }
}

module.exports = StoneThrowingDevils;
