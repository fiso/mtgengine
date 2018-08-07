"use strict";
const Constants = require ("../../../Constants");
const PrimitiveJusticeBase = require("../setME4/PrimitiveJustice");

class PrimitiveJustice extends PrimitiveJusticeBase {
  constructor (game) {
    super(game, "Primitive Justice", "Alliances", "ALL");
  }
}

module.exports = PrimitiveJustice;
