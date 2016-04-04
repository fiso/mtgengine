"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimitiveJusticeBase = require("../setALL/PrimitiveJustice.js");

class PrimitiveJustice extends PrimitiveJusticeBase {
  constructor(game) {
    super(game, "Primitive Justice", "Masters Edition IV", "ME4");
  }
}

module.exports = PrimitiveJustice;
