"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoisonArrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Poison Arrow", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = PoisonArrow;
