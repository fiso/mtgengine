"use strict";
const Constants = require ("../../../Constants");
const BodyDoubleBase = require("../setDDM/BodyDouble");

class BodyDouble extends BodyDoubleBase {
  constructor (game) {
    super(game, "Body Double", "Planar Chaos", "PLC");
  }
}

module.exports = BodyDouble;
