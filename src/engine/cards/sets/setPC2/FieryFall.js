"use strict";
const Constants = require ("../../../Constants");
const FieryFallBase = require("../setE01/FieryFall");

class FieryFall extends FieryFallBase {
  constructor (game) {
    super(game, "Fiery Fall", "Planechase 2012", "PC2");
  }
}

module.exports = FieryFall;
