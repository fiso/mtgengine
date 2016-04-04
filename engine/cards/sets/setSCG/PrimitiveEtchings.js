"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimitiveEtchings extends Card {
  constructor(game) {
    super(game, "Primitive Etchings", "Scourge", "SCG");
  }
}

module.exports = PrimitiveEtchings;
