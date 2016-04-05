"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimitiveEtchings extends UnimplementedCard {
  constructor(game) {
    super(game, "Primitive Etchings", "Scourge", "SCG");
  }
}

module.exports = PrimitiveEtchings;
