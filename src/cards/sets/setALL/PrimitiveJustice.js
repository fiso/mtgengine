"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimitiveJustice extends UnimplementedCard {
  constructor(game) {
    super(game, "Primitive Justice", "Alliances", "ALL");
  }
}

module.exports = PrimitiveJustice;
