"use strict";
const Constants = require ("../../../Constants");
const TangleBase = require("../setINV/Tangle");

class Tangle extends TangleBase {
  constructor(game) {
    super(game, "Tangle", "Vintage Masters", "VMA");
  }
}

module.exports = Tangle;
