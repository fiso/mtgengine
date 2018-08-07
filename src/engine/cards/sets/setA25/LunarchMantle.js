"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LunarchMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Lunarch Mantle", "Masters 25", "A25");
  }
}

module.exports = LunarchMantle;
