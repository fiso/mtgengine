"use strict";
const Constants = require ("../../../Constants");
const FieryFallBase = require("../setE01/FieryFall");

class FieryFall extends FieryFallBase {
  constructor (game) {
    super(game, "Fiery Fall", "Modern Masters", "MMA");
  }
}

module.exports = FieryFall;
