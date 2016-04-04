"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimitiveJustice extends Card {
  constructor(game) {
    super(game, "Primitive Justice", "Alliances", "ALL");
  }
}

module.exports = PrimitiveJustice;
