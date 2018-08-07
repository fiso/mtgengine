"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PowerWithoutEqual extends UnimplementedCard {
  constructor (game) {
    super(game, "Power Without Equal", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = PowerWithoutEqual;
