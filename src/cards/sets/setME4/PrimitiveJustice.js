"use strict";
const Constants = require ("../../../Constants");
const PrimitiveJusticeBase = require("../setALL/PrimitiveJustice");

class PrimitiveJustice extends PrimitiveJusticeBase {
  constructor(game) {
    super(game, "Primitive Justice", "Masters Edition IV", "ME4");
  }
}

module.exports = PrimitiveJustice;
